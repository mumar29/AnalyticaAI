#supabase_database.py
import os
import json
from typing import Any, Dict, List, Optional, Tuple
from pydantic import BaseModel
from supabase import create_client, Client

from LLM_analysis import get_embedding
from agent_functions import Document
from models import ProcessedChunk

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Initialize Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)


class ConversationMessage(BaseModel):
    role: str  # "user" or "AI"
    content: str
    timestamp: float

def execute_sql_query(query: str) -> Optional[List[dict]]:
    try:
        response = supabase.rpc("execute_sql", {"query": query}).execute()
        return response.data
    
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
        JOIN table_categories tc ON LOWER(c.table_name) = LOWER(tc.table_name)
        WHERE c.table_schema = 'public'
        AND tc.category = 'store'
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
        result = supabase.table("md_documents").insert(doc_data).execute()
        document_id = result.data[0]['document_id']
        return document_id
    except Exception as e:
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
        supabase.table("md_documents").update(update_data).eq("document_id", document_id).execute()
    except Exception as e:
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

async def retrieve_all_documents() -> List[Document]:
    try:
        documents_result = supabase.from_('md_documents').select('document_id, title, summary').execute()

        if not documents_result.data:
            return []  # No documents found

        documents = [
            Document(id=doc["document_id"], title=doc["title"], summary=doc["summary"])
            for doc in documents_result.data
        ]

        return documents
        
    except Exception as e:
        print(f"Error retrieving documentation: {e}")
        return []

async def retrieve_relevant_chunks(document_ids: List[int], user_query: str) -> Tuple[List[int], str]:
    try:
        # Get the embedding for the query
        query_embedding = get_embedding(user_query)

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
            return [], "No relevant documentation found."
            
        chunk_ids = [doc['chunk_id'] for doc in result.data]

        # Format the results
        formatted_chunks = []

        # Process all chunks to build formatted output and find the most relevant CSV data
        for doc in result.data:
            # Format the chunk for output
            chunk_text = f"""
                # {doc['title']}

                {doc['content']}
                """
            formatted_chunks.append(chunk_text)

        # Join all chunks with a separator
        return chunk_ids, "\n\n---\n\n".join(formatted_chunks)
        
    except Exception as e:
        print(f"Error retrieving documentation: {e}")
        return [], f"Error retrieving documentation: {str(e)}"

async def retrieve_chunks_tables(chunk_ids: List[int]) -> List[str]:
    try:

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
        print(f"Error retrieving documentation: {e}")
        return []

async def create_conversation_session(user_id): 
    try:   
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

async def update_conversation_summary(user_id, conversation_id, summary):
    """Update the summary of a conversation for a given user."""
    try:   
        # If no existing conversation, create a new one
        response = supabase.table("conversations").update(
            {"summary": summary}
        ).eq("user_id", user_id).eq("id", conversation_id).execute()  

        return response.data[0]["id"]

    except Exception as e:
        print(f"Error updating conversation summary: {e}")
        return None 

async def get_user_conversations(user_id: str) -> List[dict] | None:
    try:
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

async def get_conversation_messages(conversation_id, limit: Optional[int] = None)-> List[ConversationMessage] | None:
    try: 

        query = (
            supabase.table("messages")
            .select("role", "text_content", "json_content", "created_at")
            .eq("conversation_id", conversation_id)
            .order("created_at", desc=True)  # Order by newest first
        )

        if limit:
            query = query.limit(limit)

        response = query.execute()

        if not response.data:
            return None
        
        return response.data
    
    except Exception as e:
        print(f"Error retrieving conversation history: {e}")
        return None
    
async def save_converation_message(conversation_id, role, text_content, json_content = None):
    try:

        if text_content is None:
            raise ValueError("Text content must be provided.")

        response = supabase.table("messages").insert({
            "conversation_id": conversation_id,
            "role": role,
            "text_content": text_content,
            "json_content": json_content
        }).execute()
    
        if not response.data:
            return []
        
        return response.data

    except Exception as e:
        print(f"Error saving conversation message: {e}")
        return []