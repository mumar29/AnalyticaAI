import base64
import csv
import io
import json
import os
import re
import tempfile
from urllib.parse import urlparse
import uuid
import cloudinary.uploader
from matplotlib import pyplot as plt
import pandas as pd
import psycopg2
from typing import Any, List, Dict, Optional
from context_storage import CURRENT_ORG_ID
from database_provider import DatabaseProvider
from llm_provider import LLMProvider
from decimal import Decimal
from datetime import datetime, date, time
from io import StringIO
import plotly.express as px

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

def normalize_url(url: str) -> str:
    """
    Ensures that the URL starts with a valid scheme. If missing, prepends 'https://'.
    """
    parsed = urlparse(url)
    if not parsed.scheme:
        # You can adjust to http:// if needed or decide based on other criteria
        return "https://" + url
    return url

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


def safe_filename(title: str, max_length: int = 50) -> str:
    """
    Generate a safe filename segment from the chart title.
    Non-alphanumeric characters are replaced with underscores, and the length is capped.
    """
    safe_title = "".join(c if c.isalnum() else "_" for c in title)[:max_length]
    return safe_title

# def generate_charts_images(chart_configs: dict) -> list:
#     images = []
#     csv_collection = chart_configs.get("csv_collection", {}).get("csvs", [])
#     csv_data = {csv["csv_index"]: csv["content"] for csv in csv_collection}
#     primary_charts = chart_configs.get("primary_charts", [])
#     secondary_charts = chart_configs.get("secondary_charts", [])
#     all_charts = primary_charts + secondary_charts

#     def process_column(df: pd.DataFrame, col: str, col_type: str) -> pd.DataFrame:
#         if col_type == "datetime":
#             df[col] = pd.to_datetime(df[col], format='%Y-%m-%d %H:%M:%S', errors='coerce')
#         elif col_type == "date":
#             df[col] = pd.to_datetime(df[col]).dt.date
#         elif col_type == "numeric":
#             df[col] = pd.to_numeric(df[col], errors='coerce')
#         elif col_type == "boolean":
#             df[col] = df[col].astype(bool)
#         elif col_type == "category":
#             df[col] = df[col].astype('category')
#         # text columns remain as strings
#         return df

#     for chart in all_charts:
#         csv_index = chart.get("csv_index")
#         csv_content = csv_data.get(csv_index)
#         if csv_content:
#             df = pd.read_csv(StringIO(csv_content))
#             mapping = chart.get("mapping", {})
            
#             # Process axis configurations
#             label_config = mapping.get("label", {})
#             value_config = mapping.get("value", {})

#             # Get column names and types
#             label_col = label_config.get("source_column")
#             label_col_display = label_config.get("display_name")
#             label_type = label_config.get("column_type", "category")
            
#             value_col = value_config.get("source_column")
#             value_col_display = value_config.get("display_name")
#             value_type = value_config.get("column_type", "numeric")

#             # Process columns
#             if label_col and label_col in df.columns:
#                 df = process_column(df, label_col, label_type)
#             if value_col and value_col in df.columns:
#                 df = process_column(df, value_col, value_type)

#             chart_type = chart.get("type")
#             title = chart.get("title", "Chart")
#             fig = None

#             # Generate plot with processed data
#             if chart_type == "bar":
#                 fig = px.bar(df, x=label_col, y=value_col, title=title, labels={label_col: label_col_display, value_col: value_col_display})
#             elif chart_type == "line":
#                 fig = px.line(df, x=label_col, y=value_col, title=title, labels={label_col: label_col_display, value_col: value_col_display})
#             elif chart_type == "pie":
#                 fig = px.pie(df, values=value_col, names=label_col, title=title, labels={label_col: label_col_display, value_col: value_col_display})
#             else:
#                 fig = px.line(df, x=label_col, y=value_col, title=title, labels={label_col: label_col_display, value_col: value_col_display})

#             fig.update_layout(title={'x': 0.5}, xaxis_tickangle=-45)

#             # Image handling
#             safe_title = safe_filename(title)
#             unique_suffix = uuid.uuid4().hex[:8]
#             filename = f"{safe_title}_{unique_suffix}.png"
#             temp_path = os.path.join(tempfile.gettempdir(), filename)

#             try:
#                 fig.write_image(temp_path)
#                 upload_result = cloudinary.uploader.upload(temp_path, folder="chart_images")
#                 images.append({
#                     "title": title,
#                     "chart_type": chart_type,
#                     "image_url": upload_result.get("secure_url"),
#                     "mapping": mapping,
#                 })
#             finally:
#                 if os.path.exists(temp_path):
#                     os.remove(temp_path)

#     return images


def generate_charts_images(chart_configs: dict) -> list:
    images = []
    csv_collection = chart_configs.get("csv_collection", {}).get("csvs", [])
    csv_data = {csv["csv_index"]: csv["content"] for csv in csv_collection}
    primary_charts = chart_configs.get("primary_charts", [])
    secondary_charts = chart_configs.get("secondary_charts", [])
    all_charts = primary_charts + secondary_charts

    for chart in all_charts:
        csv_index = chart.get("csv_index")
        csv_content = csv_data.get(csv_index)
        if csv_content:
            df = pd.read_csv(StringIO(csv_content))
            
            mapping = chart.get("mapping", {})
            label_col = mapping.get("label_column")
            value_col = mapping.get("value_column")

            chart_type = chart.get("type")
            title = chart.get("title", "Chart")
            fig = None

            if chart_type == "bar":
                fig = px.bar(df, x=label_col, y=value_col, title=title)
            elif chart_type == "line":
                fig = px.line(df, x=label_col, y=value_col, title=title)
            elif chart_type == "pie":
                fig = px.pie(df, values=value_col, names=label_col, title=title)
            else:
                fig = px.line(df, x=label_col, y=value_col, title=title)

            fig.update_layout(title={'x': 0.5}, xaxis_tickangle=-45)

            # Use your safe filename logic with a unique suffix
            safe_title = safe_filename(title)
            unique_suffix = uuid.uuid4().hex[:8]
            filename = f"{safe_title}_{unique_suffix}.png"

            # Create a temp file in the system temp dir with your filename
            temp_path = os.path.join(tempfile.gettempdir(), filename)

            try:
                fig.write_image(temp_path)

                # Upload to image host (e.g., Cloudinary)
                upload_result = cloudinary.uploader.upload(temp_path, folder="chart_images")
                image_url = upload_result.get("secure_url")

                images.append({
                    "title": title,
                    "chart_type": chart_type,
                    "image_url": image_url,
                    "mapping": mapping,
                })
            finally:
                if os.path.exists(temp_path):
                    os.remove(temp_path)

    return images

# Convenience function for executing queries.
def execute_query(query: str, connection_id: str, params: Optional[dict] = None) -> Optional[List[dict]]:
    """
    Convenience function that delegates to DatabaseProvider.execute_query.
    """
    org_id = CURRENT_ORG_ID.get()
    
    return DatabaseProvider.execute_query(org_id, connection_id, query, params)

# At the module level, after your LLMProvider class
def generate_completion(system_prompt: str, user_content: str, response_schema: dict) -> str:
    """
    Convenience function that delegates to LLMProvider.generate_completion
    """
    
    org_id = CURRENT_ORG_ID.get()

    return LLMProvider.generate_completion(org_id, system_prompt, user_content, response_schema)

def extract_json(response: str) -> str:
    """
    Extract the first JSON object from the response string.
    This function uses a simple brace matching approach.
    """
    brace_count = 0
    start_idx = None
    for i, char in enumerate(response):
        if char == '{':
            if brace_count == 0:
                start_idx = i
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0 and start_idx is not None:
                return response[start_idx:i+1].strip()
    return response.strip()

def post_process_response(response: str, expected_root_key: Optional[str] = None) -> str:
    """
    Extracts a valid JSON object from the response string.
    If 'expected_root_key' is given and not present in the parsed JSON object,
    then the JSON is wrapped in a dict with that key.
    """
    json_str = extract_json(response)
    try:
        data = json.loads(json_str)
    except json.JSONDecodeError as e:
        raise ValueError(f"Failed to parse JSON: {e}")

    # If an expected root key is defined but missing, then wrap the JSON.
    if expected_root_key and (not isinstance(data, dict) or expected_root_key not in data):
        # Here you can decide if you need to wrap it in a list.
        # For your TablesRetrieved case, the schema expects a key "tables" with a list of queries.
        # So if the data looks like a single TableQuery, wrap it in a list.
        data = {expected_root_key: data if isinstance(data, list) else [data]}

    return json.dumps(data, indent=2)

def get_sample_value(prop_schema: Dict[str, Any]) -> Any:
    if 'enum' in prop_schema:
        return prop_schema['enum'][0]
    
    if 'anyOf' in prop_schema:
        for sub in prop_schema['anyOf']:
            if 'enum' in sub:
                return sub['enum'][0]
            type_value = sub.get('type')
            if type_value == 'string':
                return "sample"
            elif type_value == 'boolean':
                return True
            elif type_value == 'integer':
                return 0
            elif type_value == 'number':
                return 0.0
            elif type_value == 'object':
                return {}
        return None

    type_value = prop_schema.get('type')
    if type_value == 'string':
        return "sample"
    elif type_value == 'boolean':
        return True
    elif type_value == 'integer':
        return 0
    elif type_value == 'number':
        return 0.0
    elif type_value == 'object':
        return {}
    elif type_value == 'array':
        return []
    return None

def generate_model_example_from_schema(schema: Dict[str, Any]) -> str:
    properties = schema.get("properties", {})
    example = {}
    for field, prop_schema in properties.items():
        example[field] = get_sample_value(prop_schema)
    return json.dumps(example, indent=2)

def attach_both_schema_and_example_to_prompt(
    system_prompt: str,
    model_json_schema: Dict[str, Any],
    schema_header: str = "The response must follow the JSON schema below:",
    example_header: str = "Here is an example of the expected JSON output:"
) -> str:
    full_schema = json.dumps(model_json_schema, indent=2)
    example = generate_model_example_from_schema(model_json_schema)
    instruction = f"\n\n{schema_header}\n{full_schema}\n\n{example_header}\n{example}\n"
    return system_prompt + instruction

def extract_json_from_response(text: str) -> str:
    # Extract text between json ...  or just  ... 
    match = re.search(r"(?:json)?\s*(\{.*?\})\s*", text, re.DOTALL)
    if match:
        return match.group(1).strip()
    return text.strip()