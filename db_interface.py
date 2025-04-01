# db_interface.py
from abc import ABC, abstractmethod
from typing import Any, Dict, List, Optional, Tuple

class DatabaseInterface(ABC):
    @abstractmethod
    def execute_query(self, query: str, params: Dict[str, Any] = None) -> List[Dict[str, Any]]:
        """Execute a SQL query and return results as a list of dictionaries"""
        pass
    
    @abstractmethod
    def execute_insert(self, table: str, data: Dict[str, Any]) -> Dict[str, Any]:
        """Insert data into a table and return the created record"""
        pass
    
    @abstractmethod
    def execute_bulk_insert(self, table: str, data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Bulk insert data into a table and return the created records"""
        pass
    
    @abstractmethod
    def execute_upsert(self, table: str, data: Dict[str, Any], 
                      on_conflict: List[str] = None) -> Dict[str, Any]:
        """Update or insert data and return the result"""
        pass
    
    @abstractmethod
    def execute_update(self, table: str, data: Dict[str, Any], 
                      match_criteria: Dict[str, Any]) -> Dict[str, Any]:
        """Update data in a table based on criteria"""
        pass
    
    @abstractmethod
    def execute_select(self, table: str, columns: List[str], 
                      filters: Dict[str, Any] = None, 
                      order_by: str = None, 
                      desc: bool = False,
                      limit: int = None,
                      offset: int = None) -> List[Dict[str, Any]]:
        """Select data from a table with filters"""
        pass
    
    @abstractmethod
    def execute_delete(self, table: str, match_criteria: Dict[str, Any]) -> Dict[str, Any]:
        """Delete data from a table based on criteria"""
        pass
    
    @abstractmethod
    def call_procedure(self, procedure: str, params: Dict[str, Any] = None, param_types: Dict[str, str] = None) -> Any:
        """Call a stored procedure or function"""
        pass