# supabase_provider.py
from typing import Any, Dict, List, Optional, Tuple
from db_interface import DatabaseInterface
from supabase import create_client

class SupabaseProvider(DatabaseInterface):
    _instance = None
    _client = None
    
    @classmethod
    def initialize(cls, url: str, key: str):
        cls._instance = cls(url, key)
        return cls._instance
    
    @classmethod
    def get_instance(cls):
        if not cls._instance:
            raise RuntimeError("SupabaseProvider not initialized. Call initialize() first.")
        return cls._instance
    
    @classmethod
    def get_client(cls):
        if not cls._instance:
            raise RuntimeError("SupabaseProvider not initialized. Call initialize() first.")
        return cls._instance._client
    
    def __init__(self, url: str, key: str):
        self._client = create_client(url, key)
    
    def execute_query(self, query: str, params: Dict[str, Any] = None) -> List[Dict[str, Any]]:
        # Use RPC for raw SQL query execution
        response = self._client.rpc("execute_sql", {"query": query, "params": params}).execute()
        return response.data if response.data else []
    
    def execute_insert(self, table: str, data: Dict[str, Any]) -> Dict[str, Any]:
        response = self._client.table(table).insert(data).execute()
        return response.data[0] if response.data else {}
    
    def execute_bulk_insert(self, table: str, data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        response = self._client.table(table).insert(data).execute()
        return response.data[0] if response.data else {}
        
    def execute_upsert(self, table: str, data: Dict[str, Any], 
                      on_conflict: List[str] = None) -> Dict[str, Any]:
        response = self._client.table(table).upsert(data, on_conflict=on_conflict).execute()
        return response.data[0] if response.data else {}
    
    def execute_update(self, table: str, data: Dict[str, Any], 
                      match_criteria: Dict[str, Any]) -> Dict[str, Any]:
        query = self._client.table(table).update(data)
        
        # Apply match criteria
        for key, value in match_criteria.items():
            query = query.eq(key, value)
        
        response = query.execute()
        return response.data[0] if response.data else {}
    
    def execute_select(self, table: str, columns: List[str], 
                    filters: Dict[str, Any] = None, 
                    order_by: str = None, 
                    desc: bool = False,
                    limit: int = None,
                    offset: int = None) -> List[Dict[str, Any]]:
        # Start with the base query
        query = self._client.table(table).select(",".join(columns))
        
        # Apply filters
        if filters:
            for key, value in filters.items():
                if isinstance(value, list):
                    query = query.in_(key, value)
                else:
                    query = query.eq(key, value)
        
        # Apply ordering
        if order_by:
            query = query.order(order_by, desc=desc)
        
        # Apply limit
        if limit:
            query = query.limit(limit)
        
        if offset is not None:
            query = query.range(offset, offset + 1000000)
        
        response = query.execute()
        return response.data if response.data else []

    def execute_delete(self, table: str, match_criteria: Dict[str, Any]) -> Dict[str, Any]:
        query = self._client.table(table).delete()
        
        # Apply match criteria, using 'in_' if the value is a list
        for key, value in match_criteria.items():
            if isinstance(value, list):
                query = query.in_(key, value)
            else:
                query = query.eq(key, value)
        
        response = query.execute()
        return response.data[0] if response.data else {}

    
    def call_procedure(self, procedure: str, params: Dict[str, Any] = None, param_types: Dict[str, str] = None) -> Any:
        response = self._client.rpc(procedure, params).execute()
        print(f"Procedure {procedure} executed with params. Response: {response}")
        return response.data if response.data else []
