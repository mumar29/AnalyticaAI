import os
import json
import logging
from typing import Any, Dict, List
from supabase import create_client, Client

from chunk_md import ProcessedChunk

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Initialize Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def get_database_schema():
    # Unified SQL query to fetch both schema details and table-level view access.
    query = """
        SELECT 
            c.table_name, 
            c.column_name, 
            CASE 
                WHEN c.data_type = 'USER-DEFINED' THEN 
                    (SELECT format_type(atttypid, atttypmod)
                     FROM pg_attribute
                     WHERE attname = c.column_name
                       AND attrelid = (SELECT oid FROM pg_class WHERE relname = c.table_name LIMIT 1))
                ELSE c.data_type
            END AS data_type,
            c.is_nullable,
            COALESCE(
                (
                    SELECT json_agg(grantee) 
                    FROM information_schema.role_table_grants
                    WHERE table_schema = 'public'
                      AND table_name = c.table_name
                      AND grantee IN ('manager', 'customer')
                ),
                '[]'::json
            ) AS view_access
        FROM information_schema.columns c
        WHERE c.table_schema = 'public'
        ORDER BY c.table_name, c.ordinal_position
    """
    
    # Execute the query using Supabase
    response = supabase.rpc("execute_sql", {"query": query}).execute()
    response_data = json.loads(response.model_dump_json())["data"]

    # Map longer data type names to shorter versions
    type_mappings = {
        "character varying": "varchar",
        "timestamp without time zone": "timestamp",
        # Add additional mappings if needed
    }
    
    schema = {}

    for item in response_data:
        table_name = item["table_name"]
        column_name = item["column_name"]
        data_type = item["data_type"]
        short_type = type_mappings.get(data_type, data_type)
        # If is_nullable is "NO", the column is not nullable (required) -> add "!"
        nullability = "!" if item.get("is_nullable") == "NO" else ""
        view_access = item["view_access"] or []

        if table_name not in schema:
            schema[table_name] = {
                "columns": {},
                "view_access": view_access
            }

        schema[table_name]["columns"][column_name] = f"{short_type}{nullability}"

    # Wrap the result in a top-level "tables" key for clarity
    output = {"tables": schema}
    return output


async def create_document_record(path: str, source_type: str) -> str:
    """Create initial document record and return document_id"""
    doc_data = {
        "path": path,
        "source_type": source_type,
    }

    try:
        logger.info(f"Creating document record for path: {path}, source_type: {source_type}")
        result = supabase.table("md_documents").insert(doc_data).execute()
        document_id = result.data[0]['document_id']
        logger.info(f"Document created successfully with ID: {document_id}")
        return document_id
    except Exception as e:
        logger.error(f"Error creating document record: {e}")
        raise

async def finalize_document(document_id: str, title: str, summary: str, 
                            keywords: List[str], embedding: List[float]):
    """Update document with final processed data"""
    update_data = {
        "title": title,
        "summary": summary,
        "keywords": keywords,
        "embedding": embedding
    }

    try:
        logger.info(f"Finalizing document ID: {document_id} with title: {title}")
        supabase.table("md_documents").update(update_data).eq("document_id", document_id).execute()
        logger.info(f"Document ID: {document_id} updated successfully")
    except Exception as e:
        logger.error(f"Error finalizing document ID {document_id}: {e}")
        raise

def store_chunk(chunk: ProcessedChunk):
    text_data = {
        "document_id": chunk.document_id,
        "chunk_number": chunk.chunk_number,
        "title": chunk.title,
        "summary": chunk.summary,
        "keywords": chunk.keywords,
        "content": chunk.content,
        "metadata": chunk.metadata,
        "embedding": chunk.embedding
    }

    result = supabase.table("md_chunks").insert(text_data).execute()
    chunk_id = result.data[0]['chunk_id']

    if chunk.tables:
        for table in chunk.tables:
            table_data = {
                "document_id": chunk.document_id,
                "chunk_id": chunk_id,
                "table_hash": table["table_hash"],
                "column_names": table["column_names"],
                "csv_data": table["csv_string"],
                "num_rows": table["num_rows"]
            }
            supabase.table("md_tables").insert(table_data).execute()