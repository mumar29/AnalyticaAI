from datetime import datetime, timezone
from typing import List, Union
from markdown_it import MarkdownIt
from urllib.parse import urlparse
from langchain.text_splitter import MarkdownTextSplitter

from LLM_analysis import get_embedding, get_keywords, get_title_and_summary
from mdTocsv import get_md_tables

from models import ProcessedChunk
from supabase_database import create_document_record, finalize_document, store_chunk

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

def process_chunk(chunk: str, chunk_number: int, doc_id: int) -> ProcessedChunk:
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
    
    # if source_type == "webpage":
    #     parsed_url = urlparse(path)

    #     source = parsed_url.netloc
    #     complete_path = parsed_url.path

    # elif source_type == "pdf":
    #     source = os.path.basename(path)  # PDF filename without directory
    #     complete_path = path  # Full file path for PDFs
    # else:
    #     raise ValueError(f"Unknown source type: {source_type}")

    # Create metadata
    metadata = {
        # "source": source, 
        # "path": complete_path,
        # "source_type": source_type, 
        "chunk_size": len(chunk),
        "processed_at": datetime.now(timezone.utc).isoformat(),
        "table_references": table_references
    }
    
    return ProcessedChunk(
        document_id= doc_id,
        chunk_number= chunk_number,
        title= content['title'],
        summary= content['summary'],
        keywords= keywords,
        content= chunk,
        metadata= metadata,
        embedding= embeddings,
        tables= tables
    )

async def process_document(content: Union[str, List[str]], path: str, source_type: str, org_id: str):
    """Process a single document end-to-end.
    
    Args:
        content: A single markdown string or a list of markdown strings (each for a separate webpage).
        path: The identifier for the document (could be a file path or domain).
        source_type: The type of source (e.g., "pdf" or "webpage").
    """
    # Create initial document record
    document_id = await create_document_record(path, source_type, org_id)
    
    chunk_summaries = []
    
    # Decide whether we're dealing with a single markdown or multiple pages.
    if isinstance(content, list):
        # Process each webpage's markdown separately
        for page_markdown in content:
            chunks = chunk_markdownv2(page_markdown, chunk_size=2000)
            for i, chunk in enumerate(chunks):
                chunk_object = process_chunk(chunk, i + 1, document_id)
                store_chunk(chunk_object)
                chunk_summaries.append(chunk_object.summary)
    else:
        # Process a single markdown string
        chunks = chunk_markdownv2(content, chunk_size=2000)
        for i, chunk in enumerate(chunks):
            chunk_object = process_chunk(chunk, i + 1, document_id)
            store_chunk(chunk_object)
            chunk_summaries.append(chunk_object.summary)
    
    # Generate document-level summary from chunk summaries
    combined_chunk_summaries = "\n\n".join(chunk_summaries)
    
    # Use the first piece of content for title context (or any other heuristic)
    first_content = content[0] if isinstance(content, list) else content
    
    doc_content = get_title_and_summary(first_content + combined_chunk_summaries, "8-10")
    
    # If content is a list, combine all markdowns for keyword extraction
    all_markdown = "\n".join(content) if isinstance(content, list) else content
    doc_keywords = get_keywords(all_markdown, 15)
    doc_embedding = get_embedding(doc_content['summary'])
    
    # Finalize document record
    await finalize_document(
        document_id=document_id,
        title=doc_content['title'],
        summary=doc_content['summary'],
        keywords=doc_keywords,
        embedding=doc_embedding
    )

# async def process_document(content: str, path: str, source_type: str):
#     """Process a single document end-to-end"""
#     # Create initial document record
#     document_id = await create_document_record(path, source_type)
    
#     # Process chunks
#     chunks = chunk_markdownv2(content, chunk_size=2000)
#     chunk_summaries = []
    
#     for i, chunk in enumerate(chunks):
#         # Process individual chunk
#         chunk_object = process_chunk(chunk, i+1, document_id)
        
#         # Store with document relationship
#         store_chunk(chunk_object)
        
#         # Collect data for document summary
#         chunk_summaries.append(chunk_object.summary)
    
#     # Generate document-level summary
#     combined_chunk_summaries = "\n\n".join(chunk_summaries)

#     doc_content = get_title_and_summary(chunks[0] + combined_chunk_summaries, "8-10")
#     doc_keywords = get_keywords(content, 15)
#     doc_embedding = get_embedding(doc_content['summary'])
    
#     # Finalize document record
#     await finalize_document(
#         document_id=document_id,
#         title=doc_content['title'],
#         summary=doc_content['summary'],
#         keywords=doc_keywords,
#         embedding=doc_embedding
#     )