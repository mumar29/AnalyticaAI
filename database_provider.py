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
    # org_id -> { connection_id: (DatabaseConnection, connection instance, connection hash) }
    _connections: Dict[int, Dict[str, Tuple[DatabaseConnection, Any, str]]] = {}

    @classmethod
    def get_connections(cls, org_id: int) -> Dict[str, Any]:
        """
        Returns a dictionary mapping connection identifiers to the connection instances for a given organization.
        """
        if org_id not in cls._connections:
            return {}
        # Return just the connection instance for each connection_id.
        return {conn_id: connection_info[1] for conn_id, connection_info in cls._connections[org_id].items()}

    @classmethod
    async def get_or_initialize(cls, org_id: int) -> Any:
        """
        Retrieve the connections for the given organization.
        If connections do not exist, fetch the config list and initialize them.
        """
        if org_id in cls._connections:
            return cls._connections[org_id]
        
        from database_functions import fetch_sql_db_credentials
        raw_configs = await fetch_sql_db_credentials(org_id)
        if not raw_configs:
            raise ConnectionError(f"Database configuration not found for organization {org_id}")

        # Expecting raw_configs to be a list of dictionaries
        connections = {}
        for raw_config in raw_configs:
            try:
                config = DatabaseConnection(**raw_config)
            except Exception as e:
                raise ValueError(f"Invalid database configuration for organization {org_id}: {str(e)}") from e
                        
            cls.initialize(org_id, config)
            connection_id = config.dbname  # or config.alias if provided
            connections[connection_id] = cls._connections[org_id][connection_id]
        
        return cls._connections[org_id]

    @classmethod
    def initialize(cls, org_id: int, config: DatabaseConnection):
        """Set up the database connection using validated configuration."""
        new_hash = cls._generate_config_hash(config)
        if org_id not in cls._connections:
            cls._connections[org_id] = {}

        connection_id = config.dbname
        # If a connection exists for this connection_id, check if it is still valid.
        if connection_id in cls._connections[org_id]:
            _, _, existing_hash = cls._connections[org_id][connection_id]
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

            cls._test_connection(new_connection, config.database_type)

            # Close existing connection if present.
            if connection_id in cls._connections[org_id]:
                _, old_connection, _ = cls._connections[org_id][connection_id]
                try:
                    old_connection.close()
                except Exception:
                    pass

            cls._connections[org_id][connection_id] = (config, new_connection, new_hash)

        except Exception as e:
            if new_connection and hasattr(new_connection, "close"):
                new_connection.close()
            raise ConnectionError(f"Connection failed for org {org_id}, connection {connection_id}: {str(e)}") from e


    @classmethod
    def execute_query(cls, org_id: int, connection_id: str, query: str, params: Optional[dict] = None) -> Optional[List[dict]]:
        """Execute a query using the connection for the given organization and connection identifier."""
        if org_id not in cls._connections or connection_id not in cls._connections[org_id]:
            raise ConnectionError("Database connection not initialized for organization or specified connection_id")
        _, connection, _ = cls._connections[org_id][connection_id]

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
            raise RuntimeError(f"Query execution failed for org {org_id}, connection {connection_id}: {str(e)}") from e
        finally:
            if not isinstance(connection, Client) and 'cursor' in locals():
                cursor.close()

    @classmethod
    def close_connection(cls, org_id: int, connection_id: str):
        """Close a single connection for a given organization."""
        if org_id in cls._connections and connection_id in cls._connections[org_id]:
            config, connection, _ = cls._connections[org_id][connection_id]
            try:
                if isinstance(connection, Client):
                    connection.postgrest.close()
                elif hasattr(connection, "close"):
                    connection.close()
            except Exception as e:
                print(f"Error closing connection for org {org_id}, connection {connection_id}: {e}")
            finally:
                # Remove this specific connection from the mapping
                del cls._connections[org_id][connection_id]
                # Clean up the organization mapping if no connections remain.
                if not cls._connections[org_id]:
                    del cls._connections[org_id]

    @classmethod
    def close_all_connections(cls, org_id: int):
        """Close all connections for a specific organization."""
        if org_id in cls._connections:
            for connection_id, (_, connection, _) in list(cls._connections[org_id].items()):
                try:
                    if isinstance(connection, Client):
                        connection.postgrest.close()
                    elif hasattr(connection, "close"):
                        connection.close()
                except Exception as e:
                    print(f"Error closing connection for org {org_id}, connection {connection_id}: {e}")
            # Remove the entire organization mapping
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
