from dataclasses import dataclass
from datetime import datetime, timezone
import json
import os
from typing import Any, Dict, List
from markdown_it import MarkdownIt
from urllib.parse import urlparse
from langchain.text_splitter import MarkdownTextSplitter

from LLM_analysis import get_embedding, get_keywords, get_title_and_summary
from mdTocsv import get_md_tables
from supabase import create_client, Client

@dataclass
class ProcessedChunk:
    path: str
    chunk_number: int
    title: str
    summary: str
    keywords: List[str]
    content: str
    metadata: Dict[str, Any]
    embedding: List[float]
    tables: List[Dict[str, Any]]

def parse_markdown_hierarchy(md_content: str) -> List[str]:
    """Improved parsing with hierarchy awareness"""
    md = MarkdownIt().parse(md_content)
    sections = []
    current_section = []
    current_level = 0

    for token in md:
        if token.type.startswith('heading'):
            level = int(token.tag[1])
            if current_section and level <= current_level:
                sections.append("\n".join(current_section))
                current_section = []
            current_level = level
        current_section.append(token.content)
    
    if current_section:
        sections.append("\n".join(current_section))
    
    return sections

def merge_small_sections(sections: List[str], min_size: int) -> List[str]:
    """
    Merge small sections with adjacent sections to avoid tiny chunks.
    """
    merged_sections = []
    buffer = ""
    
    for section in sections:
        if len(buffer) + len(section) <= min_size:
            buffer += "\n\n" + section
        else:
            if buffer:
                merged_sections.append(buffer.strip())
            buffer = section
    
    # Add the last buffer
    if buffer:
        merged_sections.append(buffer.strip())
    
    return merged_sections

def deduplicate_chunks(chunks: List[str]) -> List[str]:
    """
    Remove redundant chunks caused by overlapping.
    """
    deduplicated = []
    seen = set()
    
    for chunk in chunks:
        if chunk not in seen:
            seen.add(chunk)
            deduplicated.append(chunk)
    
    return deduplicated

def chunk_markdownv2(md_content: str, chunk_size: int) -> List[str]:
    """
    Improved markdown chunker with hierarchy awareness and small section merging.
    """
    # Step 1: Parse markdown into hierarchical sections
    sections = parse_markdown_hierarchy(md_content)
    
    # Step 2: Merge small sections to avoid tiny chunks
    merged = merge_small_sections(sections, min_size=chunk_size // 2)
    
    # Step 3: Split the merged content into chunks
    splitter = MarkdownTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=int(chunk_size * 0.15),
        strip_whitespace=True
    )
    chunks = splitter.split_text("\n\n".join(merged))
    
    # Step 4: Deduplicate overlapping chunks
    return deduplicate_chunks(chunks)


def chunk_markdownv1(text: str, chunk_size: int) -> List[str]:
    """Split text into chunks, respecting code blocks and paragraphs."""
    chunks = []
    start = 0
    text_length = len(text)

    while start < text_length:
        # Calculate end position
        end = start + chunk_size

        # If we're at the end of the text, just take what's left
        if end >= text_length:
            chunks.append(text[start:].strip())
            break

        # Try to find a code block boundary first (```)
        chunk = text[start:end]
        code_block = chunk.rfind('```')
        if code_block != -1 and code_block > chunk_size * 0.3:
            end = start + code_block

        # If no code block, try to break at a paragraph
        elif '\n\n' in chunk:
            # Find the last paragraph break
            last_break = chunk.rfind('\n\n')
            if last_break > chunk_size * 0.3:  # Only break if we're past 30% of chunk_size
                end = start + last_break

        # If no paragraph break, try to break at a sentence
        elif '. ' in chunk:
            # Find the last sentence break
            last_period = chunk.rfind('. ')
            if last_period > chunk_size * 0.3:  # Only break if we're past 30% of chunk_size
                end = start + last_period + 1

        # Extract chunk and clean it up
        chunk = text[start:end].strip()
        if chunk:
            chunks.append(chunk)

        # Move start position for next chunk
        start = max(start + 1, end)

    return chunks

def process_chunk(chunk: str, chunk_number: int, path: str, source_type: str) -> ProcessedChunk:
    """Process a single chunk of text."""
    # Get title and summary
    content = get_title_and_summary(chunk)

    # Get keywords
    keywords = get_keywords(chunk)
    
    # Get embedding
    embeddings = get_embedding(chunk)

    # Get Table CSVs
    tables = get_md_tables(chunk)
    
    # Create table references (hashes, columns, row count)
    table_references = [
        {
            "table_hash": table["table_hash"],
            "column_names": table["column_names"],
            "num_rows": table["num_rows"]
        }
        for table in tables
    ]
    
    if source_type == "webpage":
        parsed_url = urlparse(path)

        source = parsed_url.netloc
        complete_path = parsed_url.path

    elif source_type == "pdf":
        source = os.path.basename(path)  # PDF filename without directory
        complete_path = path  # Full file path for PDFs
    else:
        raise ValueError(f"Unknown source type: {source_type}")

    # Create metadata
    metadata = {
        "source": source, 
        "path": complete_path,
        "source_type": source_type, 
        "chunk_size": len(chunk),
        "processed_at": datetime.now(timezone.utc).isoformat(),
        "table_references": table_references
    }
    
    return ProcessedChunk(
        path= path,
        chunk_number= chunk_number,
        title= content['title'],
        summary= content['summary'],
        keywords= keywords,
        content= chunk,
        metadata= metadata,
        embedding= embeddings,
        tables= tables
    )

# Read from .env
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Initialize Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def store_chunk(chunk: ProcessedChunk):
    text_data = {
        "path": chunk.path,
        "chunk_number": chunk.chunk_number,
        "title": chunk.title,
        "summary": chunk.summary,
        "keywords": chunk.keywords,
        "content": chunk.content,
        "metadata": chunk.metadata,
        "embedding": chunk.embedding
    }

    supabase.table("md_chunks").insert(text_data).execute()

    if chunk.tables:
        for table in chunk.tables:
            table_data = {
                "table_hash": table["table_hash"],
                "chunk_number": chunk.chunk_number,
                "column_names": table["column_names"],
                "csv_data": table["csv_string"],
                "num_rows": table["num_rows"]
            }
            supabase.table("chunk_tables").insert(table_data).execute()


def get_database_schema():
    # Query to fetch schema details
    query = """
        SELECT 
            table_name, 
            column_name, 
            CASE 
                WHEN data_type = 'USER-DEFINED' THEN 
                    (SELECT format_type(atttypid, atttypmod)
                     FROM pg_attribute
                     WHERE attname = column_name
                     AND attrelid = (SELECT oid FROM pg_class WHERE relname = table_name LIMIT 1))
                ELSE data_type
            END AS data_type,
            is_nullable
        FROM information_schema.columns
        WHERE table_schema = 'public'
        ORDER BY table_schema, table_name, ordinal_position
    """
    
    # Execute the query using Supabase
    response = supabase.rpc("execute_sql", {"query": query}).execute()
    
    # Parse the raw response as a JSON object
    response_data = json.loads(response.model_dump_json())

    # Prepare the schema in a compact structure
    schema = {}

    # Iterate over the data and handle missing or unexpected fields
    for item in response_data['data']:
        # Access the 'result' key inside each item
        result = item.get('result', {})
        
        table_name = result['table_name']
        column_name = result['column_name']
        data_type = result['data_type']
        is_nullable = "NULL" if result.get('is_nullable') == "YES" else "NOT NULL"

        # Adding the column with its type and nullability
        if table_name not in schema:
            schema[table_name] = {}
        
        if data_type == "jsonb":
            # Query to fetch keys and their types from jsonb columns
            jsonb_query = f"""
                SELECT DISTINCT
                    jsonb_object_keys(metadata) AS key,
                    jsonb_typeof(metadata -> jsonb_object_keys(metadata)) AS key_type
                FROM {table_name}
                WHERE {column_name} IS NOT NULL
            """
            
            # Execute the query to introspect jsonb keys
            jsonb_response = supabase.rpc("execute_sql", {"query": jsonb_query}).execute()
            jsonb_data = json.loads(jsonb_response.model_dump_json())

            # Collect key-type pairs
            keys_details = {}
            for jsonb_item in jsonb_data['data']:
                jsonb_result = jsonb_item.get('result', {})
                key = jsonb_result['key']
                key_type = jsonb_result['key_type']
                keys_details[key] = key_type

            # Add the jsonb details to the schema
            schema[table_name][column_name] = {
                "type": f"{data_type} ({is_nullable})",
                "keys": keys_details
            }
        else:
            schema[table_name][column_name] = f"{data_type} ({is_nullable})"

    return schema
