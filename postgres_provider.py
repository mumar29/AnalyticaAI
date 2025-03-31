# postgres_provider.py
import psycopg2
import psycopg2.extras
from typing import Any, Dict, List, Optional, Tuple

from psycopg2.extras import Json
from db_interface import DatabaseInterface

def adapt_value(value):
    if isinstance(value, dict):
        return Json(value)
    return value

class PostgresProvider(DatabaseInterface):
    def __init__(self, connection_params: Dict[str, Any]):
        self.connection_params = connection_params
        
    def _get_connection(self):
        return psycopg2.connect(**self.connection_params)
    
    def execute_query(self, query: str, params: Dict[str, Any] = None) -> List[Dict[str, Any]]:
        conn = self._get_connection()
        try:
            cursor = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
            if params:
                cursor.execute(query, params)
            else:
                cursor.execute(query)
            
            if cursor.description:
                results = cursor.fetchall()
                # Convert from RealDictRow to plain dict
                return [dict(row) for row in results]
            else:
                return []
        finally:
            conn.commit()
            conn.close()
    
    def execute_insert(self, table: str, data: Dict[str, Any]) -> Dict[str, Any]:
        columns = list(data.keys())
        # Adapt each value if necessary
        adapted_data = {key: adapt_value(value) for key, value in data.items()}
        placeholders = [f"%({key})s" for key in columns]

        query = f"""
            INSERT INTO {table} ({', '.join(columns)})
            VALUES ({', '.join(placeholders)})
            RETURNING *
        """

        result = self.execute_query(query, adapted_data)
        return result[0] if result else {}

    def execute_bulk_insert(self, table: str, data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        if not data:
            return []
        # Assume every dict has the same keys.
        columns = list(data[0].keys())
        
        # Build placeholders for each row with unique parameter names.
        placeholder_rows = []
        all_params = {}
        for i, row in enumerate(data):
            row_placeholders = []
            for col in columns:
                # Create a unique placeholder by appending the row index.
                placeholder = f"{col}_{i}"
                row_placeholders.append(f"%({placeholder})s")
                all_params[placeholder] = row[col]
            placeholder_rows.append(f"({', '.join(row_placeholders)})")
        
        query = f"""
            INSERT INTO {table} ({', '.join(columns)})
            VALUES {', '.join(placeholder_rows)}
            RETURNING *
        """
        
        result = self.execute_query(query, all_params)
        return result if result else []


    def execute_upsert(self, table: str, data: Dict[str, Any], 
                      on_conflict: List[str] = None) -> Dict[str, Any]:
        columns = list(data.keys())
        values = list(data.values())
        placeholders = [f"%({key})s" for key in columns]
        
        conflict_clause = ""
        if on_conflict:
            # Create the ON CONFLICT section
            conflict_clause = f" ON CONFLICT ({', '.join(on_conflict)}) DO UPDATE SET "
            update_statements = [f"{col} = EXCLUDED.{col}" for col in columns if col not in on_conflict]
            conflict_clause += ", ".join(update_statements)
        
        query = f"""
            INSERT INTO {table} ({', '.join(columns)})
            VALUES ({', '.join(placeholders)})
            {conflict_clause}
            RETURNING *
        """
        
        result = self.execute_query(query, data)
        return result[0] if result else {}
    
    def execute_update(self, table: str, data: Dict[str, Any], 
                    match_criteria: Dict[str, Any]) -> Dict[str, Any]:
        # Build SET clause
        set_items = [f"{key} = %({key})s" for key in data.keys()]
        set_clause = ", ".join(set_items)
        
        # Build WHERE clause with proper placeholder names
        where_items = [f"{key} = %({key}_where)s" for key in match_criteria.keys()]
        where_clause = " AND ".join(where_items)
        
        # Prepare parameters (adding _where suffix to match criteria params)
        params = {**data}
        for key, value in match_criteria.items():
            params[f"{key}_where"] = value
        
        query = f"""
            UPDATE {table}
            SET {set_clause}
            WHERE {where_clause}
            RETURNING *
        """
        
        result = self.execute_query(query, params)
        return result[0] if result else {}
    
    
    def execute_select(self, table: str, columns: List[str],
                    filters: Dict[str, Any] = None,
                    order_by: str = None,
                    desc: bool = False,
                    limit: int = None) -> List[Dict[str, Any]]:
        columns_str = ", ".join(columns)
        query = f"SELECT {columns_str} FROM {table}"
        
        params = {}
        if filters:
            where_clauses = []
            for key, value in filters.items():
                if isinstance(value, list):
                    # For a list, use the ANY operator so that it translates to an IN clause.
                    where_clauses.append(f"{key} = ANY(%({key})s)")
                    params[key] = value
                else:
                    where_clauses.append(f"{key} = %({key})s")
                    params[key] = value
            where_clause = " AND ".join(where_clauses)
            query += f" WHERE {where_clause}"
        
        if order_by:
            query += f" ORDER BY {order_by} {'DESC' if desc else 'ASC'}"
            
        if limit:
            query += f" LIMIT {limit}"
        
        return self.execute_query(query, params)

    
    def execute_delete(self, table: str, match_criteria: Dict[str, Any]) -> Dict[str, Any]:
        # Build WHERE clause
        where_items = [f"{key} = %({key})s" for key in match_criteria.keys()]
        where_clause = " AND ".join(where_items)
        
        query = f"""
            DELETE FROM {table}
            WHERE {where_clause}
            RETURNING *
        """
        
        result = self.execute_query(query, match_criteria)
        return result[0] if result else {}
    
    def call_procedure(self, procedure: str, params: Dict[str, Any] = None, param_types: Dict[str, str] = None) -> Any:
        conn = self._get_connection()
        try:
            cursor = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
            if params:
                param_types = param_types or {}
                placeholders = []
                for key in params.keys():
                    if key in param_types:
                        placeholders.append(f"%({key})s::{param_types[key]}")
                    else:
                        placeholders.append(f"%({key})s")
                query = f"SELECT * FROM {procedure}({', '.join(placeholders)})"
                cursor.execute(query, params)
            else:
                query = f"SELECT * FROM {procedure}()"
                cursor.execute(query)
            
            if cursor.description:
                results = cursor.fetchall()
                return [dict(row) for row in results]
            else:
                return []
        finally:
            conn.commit()
            conn.close()

