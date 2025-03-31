import hashlib
from typing import Dict, Literal, Optional, Any, List, Tuple
import psycopg2
import pymysql
import pyodbc
from supabase import create_client, Client
from pydantic import BaseModel, Field, ValidationError, model_validator
from models import DatabaseConnection

# The DatabaseProvider maintains a mapping of organization ID to their connection.
class DatabaseProvider:
    """
    Database provider that supports multiple connections, keyed by organization id.
    """
    # Map org_id -> (DatabaseConnection, connection instance, connection hash)
    _connections: Dict[int, Tuple[DatabaseConnection, Any, str]] = {}

    @classmethod
    def get_or_initialize(cls, org_id: int) -> Any:
        """
        Retrieve the connection for the given organization.
        If the connection does not exist, fetch the config and initialize it.
        """
        if org_id in cls._connections:
            return cls._connections[org_id][1]

        from database_functions import fetch_sql_db_credentials
        # Fetch configuration as a dict
        raw_config = fetch_sql_db_credentials(org_id)
        if not raw_config:
            raise ConnectionError(f"Database configuration not found for organization {org_id}")

        # Convert the dict to a DatabaseConnection instance
        try:
            config = DatabaseConnection(**raw_config)
        except Exception as e:
            raise ValueError(f"Invalid database configuration for organization {org_id}: {str(e)}") from e

        cls.initialize(org_id, config)
        return cls._connections[org_id][1]

    @classmethod
    def initialize(cls, org_id: int, config: DatabaseConnection):
        """Set up the database connection using validated configuration."""
        new_hash = cls._generate_config_hash(config)

        # If a connection exists for this org, check if it's still valid.
        if org_id in cls._connections:
            _, _, existing_hash = cls._connections[org_id]
            if new_hash == existing_hash:
                return  # Connection is current; no need to reinitialize

        # Try establishing a new connection.
        new_connection = None
        try:
            if config.database_type == "postgresql":
                new_connection = cls._create_postgres_connection(config)
            elif config.database_type == "mysql":
                new_connection = cls._create_mysql_connection(config)
            elif config.database_type == "sqlserver":
                new_connection = cls._create_sqlserver_connection(config)
            elif config.database_type == "supabase":
                new_connection = cls._create_supabase_client(config)

            # Test the new connection.
            cls._test_connection(new_connection, config.database_type)

            # If an old connection exists, close it.
            if org_id in cls._connections:
                _, old_connection, _ = cls._connections[org_id]
                try:
                    old_connection.close()
                except Exception:
                    pass

            # Store the new connection.
            cls._connections[org_id] = (config, new_connection, new_hash)

        except Exception as e:
            if new_connection and hasattr(new_connection, "close"):
                new_connection.close()  # Clean up if initialization fails.
            raise ConnectionError(f"Connection failed for org {org_id}: {str(e)}") from e

    @classmethod
    def execute_query(cls, org_id: int, query: str, params: Optional[dict] = None) -> Optional[List[dict]]:
        """Execute a query using the connection for the given organization."""
        if org_id not in cls._connections:
            raise ConnectionError("Database connection not initialized for organization")
        _, connection, _ = cls._connections[org_id]

        try:
            if isinstance(connection, Client):  # Supabase client
                result = connection.rpc("execute_sql", {"query": query}).execute()
                return result.data
            else:
                cursor = connection.cursor()
                cursor.execute(query, params or ())
                if cursor.description:
                    columns = [desc[0] for desc in cursor.description]
                    results = cursor.fetchall()
                    data = [dict(zip(columns, row)) for row in results]
                else:
                    data = None
                connection.commit()
                return data
        except Exception as e:
            if not isinstance(connection, Client):
                connection.rollback()
            raise RuntimeError(f"Query execution failed for org {org_id}: {str(e)}") from e
        finally:
            if not isinstance(connection, Client) and 'cursor' in locals():
                cursor.close()

    @classmethod
    def close(cls, org_id: int):
        """Close the connection for a specific organization."""
        if org_id in cls._connections:
            _, connection, _ = cls._connections[org_id]
            try:
                if isinstance(connection, Client):
                    connection.postgrest.close()
                else:
                    connection.close()
            except Exception as e:
                print(f"Error closing connection for org {org_id}: {e}")
            del cls._connections[org_id]

    @staticmethod
    def _generate_config_hash(config: DatabaseConnection) -> str:
        """Create unique hash for connection configuration."""
        return hashlib.sha256(config.json().encode()).hexdigest()

    @staticmethod
    def _test_connection(conn: Any, db_type: str):
        """Universal connection test that works with empty databases."""
        try:
            if db_type == "supabase":
                # Use a simple SQL query to test the connection.
                result = conn.rpc('execute_sql', {'query': 'SELECT version()'}).execute()
                if not result.data:
                    raise ConnectionError("Supabase connection test failed")
            else:
                cursor = conn.cursor()
                cursor.execute("SELECT 1")
                cursor.close()
        except Exception as e:
            if hasattr(conn, 'close'):
                conn.close()
            error_msg = f"Connection test failed: {str(e)}"
            raise ConnectionError(error_msg) from e

    @staticmethod
    def _create_postgres_connection(config: DatabaseConnection):
        return psycopg2.connect(
            dbname=config.dbname,
            user=config.username,
            password=config.password,
            host=config.host,
            port=config.port,
            sslmode="disable" if not config.ssl else "require"
        )

    @staticmethod
    def _create_mysql_connection(config: DatabaseConnection):
        return pymysql.connect(
            host=config.host,
            port=config.port,
            user=config.username,
            password=config.password,
            database=config.dbname,
            ssl={"ca": "/etc/ssl/cert.pem"} if config.ssl else None
        )

    @staticmethod
    def _create_sqlserver_connection(config: DatabaseConnection):
        conn_str = (
            f"DRIVER={{{config.driver}}};"
            f"SERVER={config.host},{config.port};"
            f"DATABASE={config.dbname};"
            f"UID={config.username};"
            f"PWD={config.password};"
            "Encrypt=yes;" if config.ssl else "Encrypt=no;"
        )
        return pyodbc.connect(conn_str)

    @staticmethod
    def _create_supabase_client(config: DatabaseConnection):
        return create_client(config.supabase_url, config.supabase_key)
