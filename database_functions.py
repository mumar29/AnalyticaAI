# supabase_database.py
from typing import Any, Dict, List, Optional, Tuple
import psycopg2
from pydantic import BaseModel
from LLM_analysis import get_embedding
from agent_functions import Document
from db_service import DatabaseService
from llm_provider import LLMConnection
from models import DatabaseConnection, ProcessedChunk
from utils import execute_query
# Removed: from utils import execute_query

ALLOWED_LLM_PROVIDERS = {"GROQ", "GEMINI", "OLLAMA"}
ALLOWED_DB_PROVIDERS = {"postgresql", "mysql", "sqlserver", "supabase"}

async def set_sql_db_credentials(org_id: str, credentials: DatabaseConnection) -> Dict[str, Any]:
    """Update or insert the database credentials for a given organization."""
    if credentials.database_type not in ALLOWED_DB_PROVIDERS:
        return {
            "success": False,
            "message": f"Invalid provider '{credentials.database_type}'. Allowed values: {ALLOWED_DB_PROVIDERS}",
        }

    try:
        provider = DatabaseService.get_instance()
        data = {
            "organization_id": org_id,
            "database_type": credentials.database_type,
            "host": credentials.host,
            "port": credentials.port,
            "dbname": credentials.dbname,
            "username": credentials.username,
            "password": credentials.password,  # Ensure this is secured properly!
            "ssl": credentials.ssl,
            "supabase_url": credentials.supabase_url,
            "supabase_key": credentials.supabase_key,
            "driver": credentials.driver
        }
        # Use upsert abstraction (note: upsert returns one record if successful)
        result = provider.upsert("database_credentials", data, on_conflict=["organization_id"])
        if result:
            return {"success": True, "message": f"{credentials.database_type} credentials updated successfully"}
        else:
            return {"success": False, "message": "Failed to update credentials"}
    except Exception as e:
        return {"success": False, "message": f"Database error while updating credentials: {str(e)}"}

async def set_llm_api_key(org_id: str, llm_credentials: LLMConnection) -> Dict[str, Any]:
    """Update the API key in the database and set it as an environment variable."""
    if llm_credentials.provider not in ALLOWED_LLM_PROVIDERS:
        return {
            "success": False,
            "message": f"Invalid provider '{llm_credentials.provider}'. Allowed values: {ALLOWED_LLM_PROVIDERS}",
        }

    try:
        provider = DatabaseService.get_instance()
        data = {
            "organization_id": org_id,
            "provider": llm_credentials.provider,
            "api_key": llm_credentials.api_key,
            "host": llm_credentials.host,
        }
        result = provider.upsert("api_keys", data, on_conflict=["organization_id"])
        if result:
            return {"success": True, "message": f"{llm_credentials.provider} API key updated successfully"}
        else:
            return {"success": False, "message": "Failed to update API key"}
    except Exception as e:
        return {"success": False, "message": f"Database error while updating API key: {str(e)}"}

def fetch_sql_db_credentials(org_id: str) -> Optional[Dict[str, Any]]:
    """Retrieve the API key for a given user ID from Supabase."""
    try:
        provider = DatabaseService.get_instance()
        results = provider.select("database_credentials", ["*"], filters={"organization_id": org_id})
        return results[0] if results else None
    except Exception:
        return None

def fetch_llm_api_key(org_id: str) -> Optional[Dict[str, Any]]:
    """Retrieve the API key for a given user ID from Supabase."""
    try:
        provider = DatabaseService.get_instance()
        results = provider.select("api_keys", ["*"], filters={"organization_id": org_id})
        return results[0] if results else None
    except Exception:
        return None

class ConversationMessage(BaseModel):
    role: str  # "USER" or "AI"
    content: str
    timestamp: float

def execute_sql_query(query: str) -> Optional[List[dict]]:
    """Execute raw SQL via Supabase RPC abstraction."""
    try:
        provider = DatabaseService.get_instance()
        # Calls the execute_query method which internally calls the 'execute_sql' RPC.
        return provider.execute_query(query)
    except Exception as e:
        raise e

async def get_database_schema():
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
                    AND grantee IN ('manager', 'customer', 'admin')
                ),
                '[]'::json
            ) AS view_access
        FROM information_schema.columns c
        WHERE c.table_schema = 'public'
        ORDER BY c.table_name, c.ordinal_position
    """
    
    response_data = execute_query(query)

    if response_data is None:
        return {"tables": {}}

    type_mappings = {
        "character varying": "varchar",
        "timestamp without time zone": "timestamp",
    }
    
    schema = {}
    for item in response_data:
        table_name = item["table_name"]
        column_name = item["column_name"]
        data_type = item["data_type"]
        short_type = type_mappings.get(data_type, data_type)
        nullability = "!" if item.get("is_nullable") == "NO" else ""
        view_access = item["view_access"] or []
        if table_name not in schema:
            schema[table_name] = {
                "columns": {},
                "view_access": view_access
            }
        schema[table_name]["columns"][column_name] = f"{short_type}{nullability}"
    return {"tables": schema}

async def get_filtered_schema(organization_id: int, access_level: str = "member") -> dict:
    access_hierarchy = {"member": 1, "manager": 2, "admin": 3}
    schema = await get_database_schema()
    dynamic_tables = set(schema.get("tables", {}).keys())
    
    control_entries = await get_control_tables(organization_id)
    control_tables = set(entry["table_name"] for entry in (control_entries or []))
    
    new_tables = dynamic_tables - control_tables
    if new_tables:
        entries = [{"organization_id": organization_id, "table_name": table} for table in new_tables]
        await insert_control_tables(entries)
    
    stale_tables = control_tables - dynamic_tables
    if stale_tables:
        await delete_control_tables(organization_id, list(stale_tables))
    
    control_lookup = {entry["table_name"]: entry["access_level"] for entry in (control_entries or [])}
    filtered_schema = schema.copy()
    tables_to_remove = []
    for table, details in schema.get("tables", {}).items():
        table_access = control_lookup.get(table, "member")
        if access_hierarchy.get(table_access, 1) > access_hierarchy.get(access_level, 1):
            tables_to_remove.append(table)
    for table in tables_to_remove:
        filtered_schema["tables"].pop(table, None)
    
    # print("Filtered SQL Schema is \n", filtered_schema)
    return filtered_schema

async def create_document_record(path: str, source_type: str, org_id: str) -> str:
    """Create initial document record and return document_id"""
    doc_data = {
        "organization_id": org_id,
        "path": path,
        "source_type": source_type,
    }
    try:
        provider = DatabaseService.get_instance()
        result = provider.insert("md_documents", doc_data)
        document_id = result["document_id"]
        return document_id
    except Exception as e:
        raise e

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
        provider = DatabaseService.get_instance()
        provider.update("md_documents", update_data, {"document_id": document_id})
    except Exception as e:
        raise e

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
    provider = DatabaseService.get_instance()
    result = provider.insert("md_chunks", text_data)
    chunk_id = result["chunk_id"]
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
            provider.insert("md_tables", table_data)

async def retrieve_all_documents(org_id: int, access_level: str = "member") -> List[Document]:
    role_hierarchy = {
        "admin": ["admin", "manager", "member"],
        "manager": ["manager", "member"],
        "member": ["member"]
    }
    allowed_levels = role_hierarchy.get(access_level, ["member"])
    print("======================================================================")
    print("Allowed access levels are \n", allowed_levels)
    print("======================================================================")
    try:
        provider = DatabaseService.get_instance()
        # Since the abstraction does not support 'IN', we form a raw SQL query.
        documents_result = provider.select("md_documents", ["document_id", "title", "summary"], filters={"organization_id": org_id, "access_level": allowed_levels})
        if not documents_result:
            return []
        print("======================================================================")
        print("Raw documents retrieved are \n", documents_result)
        print("======================================================================")
        documents = [
            Document(id=doc["document_id"], title=doc["title"], summary=doc["summary"])
            for doc in documents_result
            if doc["title"] is not None and doc["summary"] is not None
        ]
        return documents
    except Exception as e:
        print(f"Error retrieving accessible documentation: {e}")
        return []

async def retrieve_relevant_chunks(document_ids: List[int], user_query: str) -> Tuple[List[int], str]:
    try:
        query_embedding = get_embedding(user_query)
        provider = DatabaseService.get_instance()
        result = provider.call_procedure(
            procedure='match_md_chunks',
            params={
                'query_embedding': query_embedding,
                'match_count': 3,
                'p_document_ids': document_ids
            },
            param_types={
                'query_embedding': 'vector(1024)',
                'match_count': 'int',
                'p_document_ids': 'bigint[]'
            }
        )
        if not result:
            return [], "No relevant documentation chunks found."
        chunk_ids_with_tables = [
            doc['chunk_id'] for doc in result
            if doc.get('metadata', {}).get('table_references', [])
        ]
        chunk_texts = [
            {"title": doc['title'], "content": doc['content']}
            for doc in result
        ]
        return chunk_ids_with_tables, chunk_texts
    except Exception as e:
        print(f"Error retrieving documentation chunks: {e}")
        return [], f"Error retrieving documentation chunks: {str(e)}"

async def retrieve_chunks_tables(chunk_ids: List[int]) -> List[str]:
    try:
        provider = DatabaseService.get_instance()
        # Build a raw SQL query to simulate an IN-filter.
        ids = ",".join(map(str, chunk_ids))
        query = f"SELECT csv_data FROM md_tables WHERE chunk_id IN ({ids})"
        result = provider.execute_query(query)
        if not result:
            return []
        csv_data_list = [item['csv_data'] for item in result]
        return csv_data_list
    except Exception as e:
        print(f"Error retrieving documentation tables: {e}")
        return []

async def create_conversation_session(user_id):
    try:
        provider = DatabaseService.get_instance()
        result = provider.insert("conversations", {"user_id": user_id})
        return result["id"]
    except Exception as e:
        print(f"Error creating new conversation session: {e}")
        return None

async def get_conversation_session(user_id, conversation_id):
    try:
        provider = DatabaseService.get_instance()
        results = provider.select("conversations", ["id", "summary"], filters={"user_id": user_id, "id": conversation_id})
        if results:
            return results[0]
        else:
            new_conversation_id = await create_conversation_session(user_id)
            return new_conversation_id
    except Exception as e:
        print(f"Error retrieving conversation summary: {e}")
        return None

async def update_conversation_title(user_id: str, conversation_id: str, title: str):
    try:
        provider = DatabaseService.get_instance()
        result = provider.update("conversations", {"title": title}, {"user_id": user_id, "id": conversation_id})
        if not result:
            return None
        return result
    except Exception as e:
        print(f"Error updating conversation title: {e}")
        return None 

async def update_conversation_summary(user_id: str, conversation_id: str, updated_summary: str, last_summarized_index):
    try:
        provider = DatabaseService.get_instance()
        result = provider.update(
            "conversations",
            {"summary": updated_summary, "last_summarized_message_count": last_summarized_index},
            {"user_id": user_id, "id": conversation_id}
        )
        if not result:
            return None
        return result
    except Exception as e:
        print(f"Error updating conversation summary: {e}")
        return None 

async def get_conversation_summary(user_id: str, conversation_id: str) -> Optional[dict]:
    try:
        provider = DatabaseService.get_instance()
        results = provider.select(
            "conversations",
            ["summary", "total_messages", "last_summarized_message_count"],
            filters={"user_id": user_id, "id": conversation_id},
            order_by="created_at",
            desc=True,
            limit=1
        )
        return results[0] if results else None
    except Exception as e:
        print(f"Error retrieving conversation summary: {e}")
        return None

async def get_user_conversations(user_id: str) -> Optional[List[dict]]:
    try:
        provider = DatabaseService.get_instance()
        results = provider.select(
            "conversations",
            ["*"],
            filters={"user_id": user_id},
            order_by="created_at",
            desc=True
        )
        return results if results else None
    except Exception as e:
        print(f"Error retrieving conversations: {e}")
        return None

async def get_conversation_messages(user_id: int, conversation_id, limit: Optional[int] = None) -> Optional[list]:
    try:
        provider = DatabaseService.get_instance()
        result = provider.call_procedure(
            "get_conversation_messages_for_user",
            {
                "p_user_id": user_id,
                "p_conversation_id": conversation_id,
                "p_history_limit": limit
            }
        )
        return result if result else None
    except Exception as e:
        print(f"Error retrieving conversation history: {e}")
        return None

async def save_conversation_messages(messages: list) -> list:
    """
    Save multiple conversation messages in a single database call.
    (Here we iterate over messages and use the insert abstraction; consider enhancing the abstraction for bulk inserts.)
    """
    results = []
    try:
        provider = DatabaseService.get_instance()
        for msg in messages:
            result = provider.insert("messages", msg)
            results.append(result)
        return results
    except Exception as e:
        print(f"Error saving conversation messages: {e}")
        return []

async def get_or_create_conversation_session_and_history(
    user_id: int, conversation_id: Optional[str] = None, history_limit: int = 8
):
    provider = DatabaseService.get_instance()
    result = provider.call_procedure(
        "get_or_create_conversation_session_and_history",
        {
            "p_user_id": user_id,
            "p_conversation_id": conversation_id,
            "p_history_limit": history_limit
        }
    )
    if result and len(result) > 0:
        row = result[0]
        session = {"id": row["conversation_id"], "summary": row["summary"]}
        conversation_history = row["messages"]
        return session, conversation_history
    else:
        return None, None

async def get_unsummarized_messages(conversation_id: str, last_index: int):
    try:
        provider = DatabaseService.get_instance()
        # Using raw SQL to simulate a range query.
        query = f"""
            SELECT role, text_content, created_at 
            FROM messages 
            WHERE conversation_id = '{conversation_id}' 
            ORDER BY created_at 
            LIMIT 100000 OFFSET {last_index}
        """
        results = provider.execute_query(query)
        return results if results else None
    except Exception as e:
        print(f"Error retrieving unsummarized messages: {e}")
        return None

async def register_organization(org_name: str, admin_name: str, admin_email: str, admin_password: str):
    try:
        provider = DatabaseService.get_instance()
        result = provider.call_procedure(
            "create_organization_admin",
            {
                "org_name": org_name,
                "admin_name": admin_name,
                "admin_email": admin_email,
                "hashed_pw": admin_password
            }
        )
        return result if result else None
    except Exception as e:
        print(f"Error registering organization: {e}")
        return None

async def get_user(user_email: str):
    try:
        provider = DatabaseService.get_instance()
        results = provider.select("users", ["*"], filters={"email": user_email})
        return results[0] if results else None
    except Exception as e:
        print(f"Error retrieving user details: {e}")
        return None

async def create_user(org_id: int, user_name: str, user_email: str, user_password: str, user_role: str):
    try:
        provider = DatabaseService.get_instance()
        data = {
            "user_name": user_name,
            "email": user_email,
            "hashed_password": user_password,
            "organization_id": org_id,
            "role": user_role
        }
        result = provider.insert("users", data)
        return result if result else None
    except Exception as e:
        print(f"Error creating user: {e}")
        return None

async def get_control_tables(organization_id: int) -> Optional[List[dict]]:
    """
    Retrieve all control entries for a given organization.
    """
    try:
        provider = DatabaseService.get_instance()
        results = provider.select(
            "database_access_control",
            ["table_name", "access_level"],
            filters={"organization_id": organization_id}
        )
        return results if results else None
    except Exception as e:
        print(f"Error retrieving control entries: {e}")
        return None

async def insert_control_tables(new_tables: list):
    """
    Insert new control entries.
    (Note: If bulk insertion is needed, consider extending the abstraction.)
    """
    try:
        provider = DatabaseService.get_instance()
        results = []
        for entry in new_tables:
            res = provider.insert("database_access_control", entry)
            results.append(res)
        return results if results else None
    except Exception as e:
        print(f"Error inserting control entry: {e}")
        return None

async def delete_control_tables(organization_id: int, table_names: list):
    """
    Delete multiple control entries.
    (Since our abstraction does not support multi-field matching with 'IN', a raw SQL query is used.)
    """
    try:
        provider = DatabaseService.get_instance()
        names = ",".join([f"'{t}'" for t in table_names])
        query = f"""
            DELETE FROM database_access_control 
            WHERE organization_id = {organization_id} 
            AND table_name IN ({names})
            RETURNING *
        """
        results = provider.execute_query(query)
        return results if results else None
    except Exception as e:
        print(f"Error deleting control entries: {e}")
        return None

async def update_control_table_access(organization_id: int, table_name: str, new_access_level: str):
    """
    Update the access level of a specific table for a given organization.
    """
    try:
        provider = DatabaseService.get_instance()
        result = provider.update(
            "database_access_control",
            {"access_level": new_access_level},
            {"organization_id": organization_id, "table_name": table_name}
        )
        return result if result else None
    except Exception as e:
        print(f"Error updating access level for table {table_name}: {e}")
        return None

async def update_document_access(organization_id: int, doc_id: int, new_access_level: str):
    """
    Update the access level of a specific document for a given organization.
    """
    try:
        provider = DatabaseService.get_instance()
        result = provider.update(
            "md_documents",
            {"access_level": new_access_level},
            {"organization_id": organization_id, "document_id": doc_id}
        )
        return result if result else None
    except Exception as e:
        print(f"Error updating access level for document {doc_id}: {e}")
        return None
