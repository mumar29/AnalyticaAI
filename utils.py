import csv
import io
import os
import psycopg2
from typing import List, Dict, Optional
from context_storage import CURRENT_ORG_ID
from database_provider import DatabaseProvider
from llm_provider import LLMProvider

def list_dict_to_csv(data: List[Dict]) -> str:
    if not data:
        return ""  # Return an empty string if no data is present

    output = io.StringIO()
    fieldnames = data[0].keys()  # Get column names from the first dictionary
    writer = csv.DictWriter(output, fieldnames=fieldnames)

    writer.writeheader()  # Write CSV headers
    writer.writerows(data)  # Write CSV rows

    return output.getvalue()

from decimal import Decimal
from datetime import datetime, date, time
import uuid

def json_default(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    elif isinstance(obj, datetime):
        return obj.isoformat()
    elif isinstance(obj, date):
        return obj.isoformat()
    elif isinstance(obj, time):
        return obj.isoformat()
    elif isinstance(obj, uuid.UUID):
        return str(obj)
    elif isinstance(obj, bytes):
        return obj.decode('utf-8')
    elif isinstance(obj, set):
        return list(obj)
    raise TypeError(f"Object of type {type(obj)} is not JSON serializable")

async def update_conversation_summary_incremental(user_id: str, session_id: str, threshold: int = 8) -> str:
    from supabase_database import get_conversation_summary, get_unsummarized_messages, update_conversation_summary

    # Retrieve the conversation session details including summary, last_summarized_index, and current_message_index.
    session = await get_conversation_summary(user_id, session_id)
    last_index = session.get("last_summarized_message_count", 0)
    current_index = session.get("total_messages", 0)

    # Calculate the number of new (unsummarized) messages.
    unsummarized_count = current_index - last_index
    if unsummarized_count < threshold:
        # Not enough new messages; no need to update the summary.
        return session.get("summary", "")

    # Fetch only the unsummarized messages using their message index.
    unsummarized_messages = await get_unsummarized_messages(session_id, last_index)

    new_messages_text = "\n".join(
        [f"{msg['role']}: {msg['text_content']}" for msg in unsummarized_messages]
    )

    # Build the summarization prompt, chaining with the existing summary if available.
    if session.get("summary"):
        prompt = f"""
        You are an expert summarizer specializing in maintaining and updating conversation context. 
        Update the existing conversation summary by integrating the new messages provided below. 
        Ensure that the updated summary is concise, informative, and accurately captures the key points, 
        important terms, and essential context from both the USER and AI. In this updated summary, please give 
        extra weight to the most recent interactions to highlight the latest context, while still retaining 
        critical information from earlier in the conversation.

        Existing Summary:
        {session['summary']}

        New Messages:
        {new_messages_text}

        Provide an updated, concise, and informative summary that effectively combines both.
        """
    else:
        prompt = f"""
        You are an expert summarizer specializing in conversation context management. 
        Summarize the conversation below in a concise and informative manner, capturing key points, 
        important terms, and essential data from both the USER and AI. In your summary, please prioritize 
        the most recent interactions to ensure that the latest context is emphasized.

        Conversation:
        {new_messages_text}
        """
    
    from agent_functions import call_llm
    summary_result = call_llm(
        system_prompt="You are a helpful summarizer",
        user_content=prompt
    )
    updated_summary = summary_result.content

    # Update the conversation session: set the new summary and update last_summarized_index to the current index.
    await update_conversation_summary(user_id, session_id, updated_summary, current_index)

    return updated_summary

def save_credentials_to_env(url, key):
    # Read the existing .env file
    if os.path.exists(".env"):
        with open(".env", "r") as f:
            lines = f.readlines()
    else:
        lines = []

    # Prepare the new credentials
    new_url_line = f"SUPABASE_URL={url}\n"
    new_key_line = f"SUPABASE_KEY={key}\n"

    # Track if the URL and key were found and replaced
    url_replaced = False
    key_replaced = False

    # Iterate through the lines and replace if found
    for i, line in enumerate(lines):
        if line.startswith("SUPABASE_URL="):
            lines[i] = new_url_line
            url_replaced = True
        elif line.startswith("SUPABASE_KEY="):
            lines[i] = new_key_line
            key_replaced = True

    # If the URL or key wasn't found, append them
    if not url_replaced:
        lines.append(new_url_line)
    if not key_replaced:
        lines.append(new_key_line)

    # Write the updated lines back to the .env file
    with open(".env", "w") as f:
        f.writelines(lines)

def execute_sql_file(sql_file_path, db_url):
    """Reads a SQL file and executes it via a direct PostgreSQL connection."""
    try:
        # Read SQL file
        with open(sql_file_path, "r") as sql_file:
            sql_commands = sql_file.read()

        # Connect to Supabase PostgreSQL database
        conn = psycopg2.connect(db_url)
        cursor = conn.cursor()

        # Execute SQL script
        cursor.execute(sql_commands)
        conn.commit()

        cursor.close()
        conn.close()

        return {"status": "success", "message": "Database setup complete."}

    except Exception as e:
        return {"status": "error", "message": f"Database setup failed: {str(e)}"}

# Convenience function for executing queries.
def execute_query(query: str, params: Optional[dict] = None) -> Optional[List[dict]]:
    """
    Convenience function that delegates to DatabaseProvider.execute_query
    """
    
    org_id = CURRENT_ORG_ID.get()

    return DatabaseProvider.execute_query(org_id, query, params)

# At the module level, after your LLMProvider class
def generate_completion(system_prompt: str, user_content: str, response_schema: dict) -> str:
    """
    Convenience function that delegates to LLMProvider.generate_completion
    """
    
    org_id = CURRENT_ORG_ID.get()

    return LLMProvider.generate_completion(org_id, system_prompt, user_content, response_schema)