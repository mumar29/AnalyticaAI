# db_factory.py
from typing import Dict, Any, Optional
from db_interface import DatabaseInterface
from postgres_provider import PostgresProvider
from supabase_provider import SupabaseProvider

class DatabaseFactory:
    @staticmethod
    def create_provider(db_type: str, config: Dict[str, Any]) -> DatabaseInterface:
        if db_type.lower() == "postgres" or db_type.lower() == "postgresql":
            # Expected keys: host, port, dbname, user, password, etc.
            return PostgresProvider(config)
        elif db_type.lower() == "supabase":
            # Expected keys: url, key
            provider = SupabaseProvider.initialize(config["url"], config["key"])
            return provider
        else:
            raise ValueError(f"Unsupported database type: {db_type}")