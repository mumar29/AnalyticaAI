from dataclasses import dataclass
from typing import Dict, Literal, Optional, Any, List, Tuple
from pydantic import BaseModel, Field, ValidationError, model_validator

@dataclass
class ProcessedDocument:
    path: str
    source_type: str
    title: str
    summary: str
    keywords: List[str]
    embedding: List[float]

@dataclass
class ProcessedChunk:
    document_id: int
    chunk_number: int
    title: str
    summary: str
    keywords: List[str]
    content: str
    metadata: Dict[str, Any]
    embedding: List[float]
    tables: List[Dict[str, Any]]

# Define the database connection configuration model.
class DatabaseConnection(BaseModel):
    database_type: Literal["postgresql", "mysql", "sqlserver", "supabase"]
    host: Optional[str] = Field(default=None, description="Database server host")
    port: Optional[int] = Field(default=None, description="Database server port")
    dbname: Optional[str] = Field(default=None, description="Database name")
    username: Optional[str] = Field(default=None, description="Database username")
    password: Optional[str] = Field(default=None, description="Database password")
    ssl: Optional[bool] = Field(default=None, description="Use SSL for secure connections")
    supabase_url: Optional[str] = Field(default=None, description="Required for Supabase")
    supabase_key: Optional[str] = Field(default=None, description="Required for Supabase")
    driver: Optional[str] = Field(default=None, description="ODBC driver for SQL Server")

    @model_validator(mode="after")
    def validate_fields(self):
        if self.database_type == "supabase":
            missing = [field for field in ["supabase_url", "supabase_key"] if not getattr(self, field)]
            if missing:
                raise ValueError(f"Missing required fields for Supabase: {', '.join(missing)}")
        else:
            missing = [field for field in ["host", "dbname", "username", "password"] if not getattr(self, field)]
            if missing:
                raise ValueError(f"Missing required fields for {self.database_type} database: {', '.join(missing)}")
            if self.database_type == "sqlserver" and not self.driver:
                raise ValueError("Missing required field for SQL Server: driver")
        return self