import csv
import io
import os
from urllib.parse import urlparse
import uuid
import psycopg2
from typing import List, Dict, Optional
from context_storage import CURRENT_ORG_ID
from database_provider import DatabaseProvider
from llm_provider import LLMProvider
from decimal import Decimal
from datetime import datetime, date, time
from io import StringIO


def list_dict_to_csv(data: List[Dict]) -> str:
    if not data:
        return ""  # Return an empty string if no data is present

    output = io.StringIO()
    fieldnames = data[0].keys()  # Get column names from the first dictionary
    writer = csv.DictWriter(output, fieldnames=fieldnames)

    writer.writeheader()  # Write CSV headers
    writer.writerows(data)  # Write CSV rows

    return output.getvalue()

def is_valid_csv(csv_str: str) -> bool:
    """
    Returns True if the CSV has at least 2 rows (header + at least one data row)
    and at least 2 columns (in the header).
    """
    f = StringIO(csv_str)
    reader = csv.reader(f)
    rows = list(reader)
    # Must have at least header and one data row
    if len(rows) < 2:
        return False
    # Check header row for at least 2 columns
    if len(rows[0]) < 2:
        return False
    return True

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

def simplify_messages(messages):
    """Simplify messages to only include a message number, role, and text content."""
    messages_sorted = sorted(messages, key=lambda m: m.get("id", 0))

    return [
        {
            "message_no": idx + 1,  # Using the index as a sequential message number
            "role": msg.get("role"),
            "text": msg.get("text_content")
        }
        for idx, msg in enumerate(messages_sorted)
    ]

MULTI_USER_DOMAINS = {
    "github.com",
    "medium.com", 
    "dev.to",
    "substack.com",
    "notion.site",
    "hashnode.dev",
    "gitlab.com",
    "bitbucket.org",
    "wordpress.com",
    "blogspot.com",
    "tumblr.com",
    "linkedin.com/in",
    "linkedin.com/company",
    "twitter.com",
    "facebook.com",
    "dribbble.com",
    "behance.net",
    "codepen.io",
    "replit.com",
    "gist.github.com",
    "glitch.me",
    "kaggle.com",
    "stackoverflow.com/users",
    "reddit.com/user",
    "reddit.com/r",
    "dev.page",
    "quora.com",
    "hashnode.com"
}
def get_website_identifier(url: str) -> str:
    """
    Returns a unique website identifier that groups URLs correctly.
    - Uses the base domain for general websites.
    - For known multi-user domains, includes the first path segment.
    """
    parsed_url = urlparse(url)
    base_domain = parsed_url.netloc.lower()
    
    if base_domain in MULTI_USER_DOMAINS:
        # Extract first path segment (e.g., github.com/Rayan-Mansoor)
        path_parts = parsed_url.path.strip("/").split("/")
        if path_parts:
            return f"{base_domain}/{path_parts[0]}"
    
    return base_domain  # Default behavior for normal websites


MULTI_USER_DOMAINS = {
    # Code repositories
    "github.com",
    "gitlab.com",
    "bitbucket.org",
    "codepen.io",
    "replit.com",
    "gist.github.com",
    "glitch.me",
    
    # Blogging and content platforms
    "medium.com",
    "dev.to",
    "substack.com",
    "hashnode.dev",
    "hashnode.com",
    "wordpress.com",
    "blogspot.com",
    "tumblr.com",
    "mirror.xyz",
    "notion.site",
    
    # Social networks
    "linkedin.com",
    "twitter.com",
    "facebook.com",
    "instagram.com",
    "pinterest.com",
    "threads.net",
    
    # Professional portfolios
    "dribbble.com",
    "behance.net",
    "artstation.com",
    "deviantart.com",
    
    # Q&A and forums
    "stackoverflow.com",
    "reddit.com",
    "quora.com",
    "discourse.org",
    
    # Technical/Data
    "kaggle.com",
    "huggingface.co",
    "kaggle.com",
    "dev.page",
    
    # Documentation/Wikis
    "readthedocs.io",
    "gitbook.io"
}

# Define special path prefixes for certain domains
SPECIAL_PATH_PREFIXES = {
    "linkedin.com": ["in", "company", "school"],
    "reddit.com": ["user", "r"],
    "stackoverflow.com": ["users", "questions"],
    "github.com": ["orgs"],
    "twitter.com": ["i", "hashtag"],
    "facebook.com": ["groups", "pages"],
    "discord.com": ["channels", "servers"],
    "notion.so": ["workspace"],
    "huggingface.co": ["spaces", "datasets"],
    "instagram.com": ["explore"],
    "youtube.com": ["channel", "c", "user"],
    "twitch.tv": ["directory", "team"],
    "pinterest.com": ["boards"]
}

def get_website_identifier(url: str) -> str:
    """
    Returns a unique website identifier that groups URLs correctly.
    """
    parsed_url = urlparse(url)
    base_domain = parsed_url.netloc.lower()
    
    # Extract domain without 'www.' if present
    domain_without_www = base_domain.removeprefix("www.")
    
    # Check if this is a multi-user domain
    if domain_without_www in MULTI_USER_DOMAINS:
        path_parts = parsed_url.path.strip("/").split("/")
        
        # Handle special path prefixes
        if domain_without_www in SPECIAL_PATH_PREFIXES and path_parts:
            if path_parts[0] in SPECIAL_PATH_PREFIXES[domain_without_www] and len(path_parts) > 1:
                return f"{base_domain}/{path_parts[0]}/{path_parts[1]}"
        
        # Standard path handling
        if path_parts:
            return f"{base_domain}/{path_parts[0]}"
    
    return base_domain

async def update_conversation_summary_incremental(user_id: str, session_id: str, messages: list, threshold: int = 8) -> str:
    from database_functions import get_conversation_summary, get_unsummarized_messages, update_conversation_title, update_conversation_summary

    # Retrieve the conversation session details including summary, last_summarized_index, and current_message_index.
    session = await get_conversation_summary(user_id, session_id)
    
    title = session.get("title", "")
    summary = session.get("summary", "")
    last_index = session.get("last_summarized_message_count", 0)
    current_index = session.get("total_messages", 0)

    from agent_functions import generate_conversation_title, generate_conversation_summary
    if not title:
        conversation_title = generate_conversation_title(messages)
        await update_conversation_title(user_id, session_id,conversation_title.title)

    # Calculate the number of new (unsummarized) messages.
    unsummarized_count = current_index - last_index
    if unsummarized_count < threshold:
        # Not enough new messages; no need to update the summary.
        return summary

    # Fetch only the unsummarized messages using their message index.
    unsummarized_messages = await get_unsummarized_messages(session_id, last_index)

    new_messages_text = "\n".join(
        [f"{msg['role']}: {msg['text_content']}" for msg in unsummarized_messages]
    )

    summary_result = generate_conversation_summary(new_messages_text, summary)

    # Update the conversation session: set the new summary and update last_summarized_index to the current index.
    await update_conversation_summary(user_id, session_id, summary_result.content, current_index)

    return summary_result.content


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