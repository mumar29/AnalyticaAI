#supabase_database.py
from typing import Any, Dict, List, Optional, Tuple
import psycopg2
from pydantic import BaseModel
from LLM_analysis import get_embedding
from agent_functions import Document
from llm_provider import LLMConnection
from models import DatabaseConnection, ProcessedChunk
from supabase_provider import SupabaseProvider
from utils import execute_query

ALLOWED_LLM_PROVIDERS = {"GROQ", "GEMINI"}
ALLOWED_DB_PROVIDERS = {"postgresql", "mysql", "sqlserver", "supabase"}

# from supabase import create_client

# url = "https://sjuxnirhcipzwvpvkzdi.supabase.cO"
# key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqdXhuaXJoY2lwend2cHZremRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMzQyMTQsImV4cCI6MjA1NTkxMDIxNH0.sDaDFR6Z0zCHGjNWTUiYmwFrXBzzwrSz9JYN_jpQvG4"
# supabase = create_client(url, key)

async def set_sql_db_credentials(org_id: str, credentials: DatabaseConnection) -> Dict[str, Any]:
    """Update or insert the database credentials for a given organization."""
    if credentials.database_type not in ALLOWED_DB_PROVIDERS:
        return {
            "success": False,
            "message": f"Invalid provider '{credentials.database_type}'. Allowed values: {ALLOWED_DB_PROVIDERS}",
        }

    try:
        supabase = SupabaseProvider.get_client()

        # Upsert: Replace existing row where org_id matches or insert if it doesn't exist
        response = (
            supabase.table("database_credentials")
            .upsert({
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
            }, on_conflict=["organization_id"])
            .execute()
        )

        if response.data:
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
        supabase = SupabaseProvider.get_client()

        response = (
            supabase.table("api_keys")
            .upsert({
                "organization_id": org_id,
                "provider": llm_credentials.provider,
                "api_key": llm_credentials.api_key,
            }, on_conflict=["organization_id"])
            .execute()
        )

        if response.data:
            return {"success": True, "message": f"{llm_credentials.provider} API key updated successfully"}
        else:
            return {"success": False, "message": "Failed to update API key"}

    except Exception as e:
        return {"success": False, "message": f"Database error while updating API key: {str(e)}"}

def fetch_sql_db_credentials(org_id: str) -> Optional[Dict[str, Any]]:
    """Retrieve the API key for a given user ID from Supabase."""
    try:
        supabase = SupabaseProvider.get_client()

        response = (
            supabase.table("database_credentials")
            .select("*")
            .eq("organization_id", org_id)
            .maybe_single()
            .execute()
        )
        return response.data if response.data else None
    except Exception:
        return None

def fetch_llm_api_key(org_id: str) -> Optional[Dict[str, Any]]:
    """Retrieve the API key for a given user ID from Supabase."""
    try:
        supabase = SupabaseProvider.get_client()

        response = (
            supabase.table("api_keys")
            .select("*")
            .eq("organization_id", org_id)
            .maybe_single()
            .execute()
        )
        return response.data if response.data else None
    except Exception:
        return None

class ConversationMessage(BaseModel):
    role: str  # "USER" or "AI"
    content: str
    timestamp: float

# def execute_sql_query(query: str) -> Optional[List[dict]]:
#     try:
#         supabase = SupabaseProvider.get_client()
#         response = supabase.rpc("execute_sql", {"query": query}).execute()
#         return response.data
    
#     except Exception as e:
#         raise

def execute_sql_query(query: str) -> Optional[List[dict]]:
    try:
        conn = psycopg2.connect(
            dbname="postgres",
            user="postgres",
            password="123456",
            host="localhost",
            port=5432
        )
        cursor = conn.cursor()
        cursor.execute(query)
        
        if cursor.description:
            columns = [desc[0] for desc in cursor.description]
            results = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in results]
        else:
            data = None
        
        conn.commit()
        cursor.close()
        conn.close()

        return data
    except Exception as e:
        raise

async def get_database_schema():
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
                    AND grantee IN ('manager', 'customer', 'admin')
                ),
                '[]'::json
            ) AS view_access
        FROM information_schema.columns c
        WHERE c.table_schema = 'public'
        ORDER BY c.table_name, c.ordinal_position
    """

    # Execute the query
    response_data = execute_query(query)
    
    if response_data is None:
        return {"tables": {}}

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

async def get_filtered_schema(organization_id: int, access_level: str = "member") -> dict:

    access_hierarchy = {
        "member": 1,
        "manager": 2,
        "admin": 3
    }

    # Step 1: Retrieve the dynamic database schema.
    schema = await get_database_schema()
    dynamic_tables = set(schema.get("tables", {}).keys())
    
    # Step 2: Retrieve current control entries for this organization.
    control_entries = await get_control_tables(organization_id)
    control_tables = set(entry["table_name"] for entry in (control_entries or []))
    
    # Step 3a: Insert missing tables with default "member" access.
    new_tables = dynamic_tables - control_tables
    if new_tables:
        entries = [
            {"organization_id": organization_id, "table_name": table}
            for table in new_tables
        ]
        await insert_control_tables(entries)
    
    # Step 3b: Delete stale entries (tables no longer in the dynamic schema).
    stale_tables = control_tables - dynamic_tables
    if stale_tables:
        await delete_control_tables(organization_id, list(stale_tables))
    
    # Create a lookup for access level per table.
    control_lookup = {entry["table_name"]: entry["access_level"] for entry in (control_entries or [])}
    
    # Create a copy to avoid modifying the original
    filtered_schema = schema.copy()
    tables_to_remove = []
    
    # Iterate over table keys directly (or unpack the items)
    for table, details in schema.get("tables", {}).items():
        # Default to "member" if not found in the control lookup.
        table_access = control_lookup.get(table, "member")
        # Check if the table's access level rank is higher than the user's access level rank.
        if access_hierarchy.get(table_access, 1) > access_hierarchy.get(access_level, 1):
            tables_to_remove.append(table)
    
    # Remove tables that don't match the access level
    for table in tables_to_remove:
        if table in filtered_schema.get("tables", {}):
            filtered_schema["tables"].pop(table)
    
    print("Filtered SQL Schema is \n", filtered_schema)
    return filtered_schema

async def create_document_record(path: str, source_type: str, org_id: str) -> str:
    """Create initial document record and return document_id"""
    doc_data = {
        "organization_id": org_id,
        "path": path,
        "source_type": source_type,
    }

    try:
        supabase = SupabaseProvider.get_client()
        result = supabase.table("md_documents").insert(doc_data).execute()
        document_id = result.data[0]['document_id']
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
        supabase = SupabaseProvider.get_client()
        supabase.table("md_documents").update(update_data).eq("document_id", document_id).execute()
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

    supabase = SupabaseProvider.get_client()
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

async def retrieve_all_documents(org_id: int, access_level: str = "member") -> List[Document]:

    role_hierarchy = {
        "admin": ["admin", "manager", "member"],
        "manager": ["manager", "member"],
        "member": ["member"]
    }

    # Get allowed access levels based on the provided access_level
    allowed_levels = role_hierarchy.get(access_level, ["member"]) 

    print("======================================================================")
    print("Allowed access levels are \n", allowed_levels)
    print("======================================================================")


    try:
        supabase = SupabaseProvider.get_client()
        documents_result = supabase.table('md_documents') \
            .select('document_id, title, summary') \
            .eq("organization_id", org_id) \
            .in_("access_level", allowed_levels) \
            .execute()
        
        if not documents_result.data:
            return []  # No documents found

        print("======================================================================")
        print("Raw documents retrieved are \n", documents_result.data)
        print("======================================================================")

        documents = [
            Document(id=doc["document_id"], title=doc["title"], summary=doc["summary"])
            for doc in documents_result.data
            if doc["title"] is not None and doc["summary"] is not None
        ]

        return documents
        
    except Exception as e:
        print(f"Error retrieving accessible documentation: {e}")
        return []

async def retrieve_relevant_chunks(document_ids: List[int], user_query: str) -> Tuple[List[int], str]:
    
    try:
        # Get the embedding for the query
        query_embedding = get_embedding(user_query)

        supabase = SupabaseProvider.get_client()

        # Query Supabase for relevant documents
        result = supabase.rpc(
            'match_md_chunks',
            {
                'query_embedding': query_embedding,
                'match_count': 3,
                'p_document_ids': document_ids
            }
        ).execute()
        
        if not result.data:
            return [], "No relevant documentation chunks found."
            
        # Extract chunk IDs only if table_references is not empty
        chunk_ids_with_tables = [
            doc['chunk_id'] for doc in result.data
            if doc.get('metadata', {}).get('table_references', [])
        ]

        # Process all chunks to build formatted output and find the most relevant CSV data
        chunk_texts = [
            {"title": doc['title'], "content": doc['content']}
            for doc in result.data
        ]

        # Join all chunks with a separator
        return chunk_ids_with_tables, chunk_texts
        
    except Exception as e:
        print(f"Error retrieving documentation chunks: {e}")
        return [], f"Error retrieving documentation chunks: {str(e)}"

async def retrieve_chunks_tables(chunk_ids: List[int]) -> List[str]:
    try:
        supabase = SupabaseProvider.get_client()

        # Query Supabase for chunk tables
        result = supabase.from_('md_tables') \
            .select('csv_data') \
            .in_("chunk_id", chunk_ids) \
            .execute()
        
        if not result.data:
            return []
        
        csv_data_list = [item['csv_data'] for item in result.data]
   
        return csv_data_list  # Return list of csv_data values
        
    except Exception as e:
        print(f"Error retrieving documentation tables: {e}")
        return []

async def create_conversation_session(user_id): 
    try:   
        supabase = SupabaseProvider.get_client()

        # If no existing conversation, create a new one
        response = supabase.table("conversations").insert(
            {"user_id": user_id}
        ).execute()

        return response.data[0]["id"]

    except Exception as e:
        print(f"Error creating new conversation session: {e}")
        return None

async def get_conversation_session(user_id, conversation_id): 
    try:   
        supabase = SupabaseProvider.get_client()

        # If no existing conversation, create a new one
        response = supabase.table("conversations") \
            .select("id, summary") \
            .eq("user_id", user_id) \
            .eq("id", conversation_id) \
            .execute()

        if response.data:
            return response.data[0]
        else:
            new_conversation_id = await create_conversation_session(user_id)
            return new_conversation_id

    except Exception as e:
        print(f"Error retrieving conversation summary: {e}")
        return None

async def update_conversation_summary(user_id: str, conversation_id: str, updated_summary: str, last_summarized_index):
    """Update the summary of a conversation for a given user."""
    try:   
        supabase = SupabaseProvider.get_client()

        # If no existing conversation, create a new one
        response = supabase.table("conversations") \
            .update({
                "summary": updated_summary,
                "last_summarized_message_count": last_summarized_index
            }) \
            .eq("user_id", user_id) \
            .eq("id", conversation_id) \
            .execute()  

        if not response.data:
            return None

        return response.data

    except Exception as e:
        print(f"Error updating conversation summary: {e}")
        return None 

async def get_conversation_summary(user_id: str, conversation_id: str) -> List[dict] | None:
    try:
        supabase = SupabaseProvider.get_client()

        response = supabase.table("conversations") \
            .select("summary, total_messages, last_summarized_message_count") \
            .eq("user_id", user_id) \
            .eq("id", conversation_id) \
            .order("created_at", desc=True) \
            .maybe_single() \
            .execute()

        if not response.data:
            return None

        return response.data

    except Exception as e:
        print(f"Error retrieving conversation summary: {e}")
        return None

async def get_user_conversations(user_id: str) -> List[dict] | None:
    try:
        supabase = SupabaseProvider.get_client()

        response = supabase.table("conversations") \
            .select("*") \
            .eq("user_id", user_id) \
            .order("created_at", desc=True) \
            .execute()


        if not response.data:
            return None

        return response.data

    except Exception as e:
        print(f"Error retrieving conversations: {e}")
        return None

async def get_conversation_messages(user_id: int, conversation_id, limit: Optional[int] = None)-> List[ConversationMessage] | None:
    try: 
        supabase = SupabaseProvider.get_client()

        response = supabase.rpc(
            "get_conversation_messages_for_user",
            {
                "p_user_id": user_id,
                "p_conversation_id": conversation_id,  # Pass None for new conversations.
                "p_history_limit": limit
            }
        ).execute()

        if not response.data:
            return None
        
        return response.data
    
    except Exception as e:
        print(f"Error retrieving conversation history: {e}")
        return None
    
async def save_conversation_messages(messages: list) -> list:
    """
    Save multiple conversation messages in a single database call.
    """
    try:
        if not messages:
            raise ValueError("At least one message must be provided.")
        
        supabase = SupabaseProvider.get_client()

        response = supabase.table("messages").insert(messages).execute()
        if not response.data:
            return []
        
        return response.data

    except Exception as e:
        print(f"Error saving conversation messages: {e}")
        return []

async def get_or_create_conversation_session_and_history(
    user_id: int, conversation_id: str | None = None, history_limit: int = 8
):
    """
    Retrieves a conversation session with the last `history_limit` messages.
    If no valid conversation_id is provided, creates a new conversation.
    """
    # Call the custom SQL function via supabase.rpc.
    supabase = SupabaseProvider.get_client()

    response = supabase.rpc(
        "get_or_create_conversation_session_and_history",
        {
            "p_user_id": user_id,
            "p_conversation_id": conversation_id,  # Pass None for new conversations.
            "p_history_limit": history_limit
        }
    ).execute()
    
    if response.data and len(response.data) > 0:
        row = response.data[0]
        session = {
            "id": row["conversation_id"],
            "summary": row["summary"]
        }
        conversation_history = row["messages"]
        return session, conversation_history
    else:
        return None, None
    
async def get_unsummarized_messages(conversation_id: str, last_index: int):
    try:
        supabase = SupabaseProvider.get_client()

        response = supabase.table("messages") \
            .select("role, text_content, created_at") \
            .eq("conversation_id", conversation_id) \
            .order("created_at") \
            .range(last_index, last_index + 100000) \
            .execute()

        if not response.data:
            return None

        return response.data

    except Exception as e:
        print(f"Error retrieving unsummarized messages: {e}")
        return None

async def register_organization(org_name: str, admin_email: str, admin_password: str):
    try:
        supabase = SupabaseProvider.get_client()

        response = supabase.rpc(
            "create_organization_admin",
            {
                "org_name": org_name,
                "admin_email": admin_email,
                "hashed_pw": admin_password
            }
        ).execute()

        if not response.data:
            return None

        return response.data

    except Exception as e:
        print(f"Error registering organization: {e}")
        return 

async def get_user(user_email: str):
    try:
        supabase = SupabaseProvider.get_client()

        response = supabase.table("users") \
            .select("*") \
            .eq("email", user_email) \
            .maybe_single() \
            .execute()

        if not response.data:
            return None

        return response.data

    except Exception as e:
        print(f"Error retrieving user details: {e}")
        return None
    
async def create_user(org_id: int, user_email: str, user_password: str, user_role: str):
    try:
        supabase = SupabaseProvider.get_client()

        response = supabase.table("users") \
            .insert({
                "email": user_email,
                "hashed_password": user_password,
                "organization_id": org_id,
                "role": user_role
            }) \
            .execute()

        if not response.data:
            return None

        return response.data

    except Exception as e:
        print(f"Error registering organization: {e}")
        return None
    
async def get_control_tables(organization_id: int) -> List[dict] | None:
    """
    Retrieve all control entries for a given organization.
    """
    try:
        supabase = SupabaseProvider.get_client()
        response = supabase.table("database_access_control") \
            .select("table_name, access_level") \
            .eq("organization_id", organization_id) \
            .execute()
        
        if not response.data:
            return None

        return response.data
    
    except Exception as e:
        print(f"Error retrieving control entries: {e}")
        return None

async def insert_control_tables(new_tables: list):
    """
    Insert a new control entry for the given organization and table with the specified access level.
    """
    try:
        supabase = SupabaseProvider.get_client()
        response = supabase.table("database_access_control").insert(new_tables).execute()

        if not response.data:
            return None

        return response.data
    
    except Exception as e:
        print(f"Error inserting control entry: {e}")
        return None


async def delete_control_tables(organization_id: int, table_names: list):
    """
    Delete multiple control entries for the given organization and list of tables.
    """
    try:
        supabase = SupabaseProvider.get_client()
        response = (
            supabase
            .table("database_access_control")
            .delete()
            .match({"organization_id": organization_id})
            .in_("table_name", table_names)
            .execute()
        )

        if not response.data:
            return None

        return response.data

    except Exception as e:
        print(f"Error deleting control entries: {e}")
        return None

async def update_control_table_access(organization_id: int, table_name: str, new_access_level: str):
    """
    Update the access level of a specific table for a given organization.
    """
    try:
        supabase = SupabaseProvider.get_client()
        response = (
            supabase
            .table("database_access_control")
            .update({"access_level": new_access_level})
            .match({"organization_id": organization_id, "table_name": table_name})
            .execute()
        )

        if not response.data:
            return None

        return response.data

    except Exception as e:
        print(f"Error updating access level for table {table_name}: {e}")
        return None

async def update_document_access(organization_id: int, doc_id: int, new_access_level: str):
    """
    Update the access level of a specific document for a given organization.
    """
    try:
        supabase = SupabaseProvider.get_client()
        response = (
            supabase
            .table("md_documents")
            .update({"access_level": new_access_level})
            .match({"organization_id": organization_id, "document_id": doc_id})
            .execute()
        )

        if not response.data:
            return None

        return response.data

    except Exception as e:
        print(f"Error updating access level for document {doc_id}: {e}")
        return None
