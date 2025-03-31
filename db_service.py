# db_service.py
from typing import Dict, Any, Optional, List
from db_interface import DatabaseInterface
from db_factory import DatabaseFactory

class DatabaseService:
    _instance = None
    _provider = None
    
    @classmethod
    def initialize(cls, db_type: str, config: Dict[str, Any]):
        cls._instance = cls()
        cls._provider = DatabaseFactory.create_provider(db_type, config)
        return cls._instance
    
    @classmethod
    def get_instance(cls):
        if not cls._instance:
            raise RuntimeError("DatabaseService not initialized. Call initialize() first.")
        return cls._instance
    
    def get_provider(self) -> DatabaseInterface:
        return self._provider
    
    # Helper methods can be added here to simplify common operations
    def execute_query(self, query: str, params: Dict[str, Any] = None):
        return self._provider.execute_query(query, params)
    
    def insert(self, table: str, data: Dict[str, Any]):
        return self._provider.execute_insert(table, data)
    
    def insert(self, table: str, data: Any):
        if isinstance(data, list):
            return self._provider.execute_bulk_insert(table, data)
        elif isinstance(data, dict):
            return self._provider.execute_insert(table, data)
        else:
            raise ValueError("Data must be a dict or a list of dicts") 
        
    def upsert(self, table: str, data: Dict[str, Any], on_conflict: List[str] = None):
        return self._provider.execute_upsert(table, data, on_conflict)
    
    def update(self, table: str, data: Dict[str, Any], match_criteria: Dict[str, Any]):
        return self._provider.execute_update(table, data, match_criteria)
    
    def select(self, table: str, columns: List[str], filters: Dict[str, Any] = None, 
              order_by: str = None, desc: bool = False, limit: int = None):
        return self._provider.execute_select(table, columns, filters, order_by, desc, limit)
    
    def delete(self, table: str, match_criteria: Dict[str, Any]):
        return self._provider.execute_delete(table, match_criteria)
    
    def call_procedure(self, procedure: str, params: Dict[str, Any] = None, param_types: Dict[str, str] = None):
        return self._provider.call_procedure(procedure, params, param_types)