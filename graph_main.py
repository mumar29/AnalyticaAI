# main.py
import asyncio
from contextlib import asynccontextmanager
import json
import time
import os
from urllib.parse import urlparse
import aiofiles
import uvicorn
from typing import Dict, List, Optional
from fastapi import FastAPI, APIRouter, Depends, File, Form, HTTPException, UploadFile, WebSocket, WebSocketDisconnect
from fastapi.security import APIKeyHeader
from pydantic import BaseModel
from llama_parse import LlamaParse
from llama_index.core import SimpleDirectoryReader
from agent_functions import ChartConfigList, PerformanceReport, Report, generate_kpi_sql_queries, generate_performance_report, generate_structured_report
from chunk_md import process_document
from crawler import crawl_website
from lang_graph import handle_query
from logging_config import logger
from supabase_database import set_llm_api_key, execute_sql_query, fetch_llm_api_key, get_conversation_messages, get_database_schema, get_user_conversations
from websocket_manager import manager
from redis_config import get_redis_client
from dotenv import load_dotenv

load_dotenv()

redis_client = get_redis_client()

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifespan event to fetch API key once on startup."""
    credentials = fetch_llm_api_key()  # Fetch and store the API key on startup
    if credentials:

        provider = credentials["provider"]
        api_key = credentials["api_key"]

        if provider == "GROQ":
            os.environ["GROQ_API_KEY"] = api_key
            print("GROQ API key set successfully.")
        elif provider == "GEMINI":
            os.environ["GEMINI_API_KEY"] = api_key
            print("GEMINI API key set successfully.")
        else:
            print(f"Unsupported provider: {provider}")
    yield  # Let FastAPI run

app = FastAPI(
    title="RAG Agent API",
    description="Multi-source RAG System with SQL/Document Integration",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# Security
api_key_header = APIKeyHeader(name="X-API-Key")

async def validate_api_key(api_key: str = Depends(api_key_header)):
    if api_key != os.getenv("API_SECRET"):
        raise HTTPException(status_code=403, detail="Invalid API Key")
    return True

# Models
class QueryRequest(BaseModel):
    text: str

class QueryResponse(BaseModel):
    session_id: str
    request_id: str
    text_response: str
    chart_configs: Optional[ChartConfigList] = None
    sources: List[str]
    latency_ms: float

class ReportRequest(BaseModel):
    request_id: str

# Define the model for each table.
class Table(BaseModel):
    columns: Dict[str, str]
    view_access: List[str]

# Define the expected output model for KPI SQL queries.
class KPIQueriesRetrieved(BaseModel):
    sql_queries: List[str]

class UrlsRequest(BaseModel):
    urls: List[str]

class LLMKeyRequest(BaseModel):
    provider: str
    key: str

# Middleware
@app.middleware("http")
async def log_requests(request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = (time.time() - start_time) * 1000
    logger.info(
        f"Method={request.method} Path={request.url.path} "
        f"Status={response.status_code} Duration={process_time:.2f}ms"
    )
    return response

@app.websocket("/ws/logs")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            await asyncio.sleep(1)
    except WebSocketDisconnect:
        manager.disconnect(websocket)

# Endpoints
router = APIRouter(dependencies=[Depends(validate_api_key)])

@router.post("/set-llm-api-key")
async def set_llm_api_key_endpoint(
    request: LLMKeyRequest,
    auth: bool = Depends(validate_api_key)
):
    """Update LLM api key"""
    try:
        response = await set_llm_api_key(request.provider, request.key)
        
        return response

    except Exception as e:
        logger.error(f"Error updating LLM api key: {str(e)}")
        raise HTTPException(status_code=500, detail="Error updating LLM api key")

@router.post("/query", response_model=QueryResponse)
@router.post("/query/{session_id}", response_model=QueryResponse)
async def process_query_endpoint(
    request: QueryRequest, 
    session_id: Optional[str] = None,
    auth: bool = Depends(validate_api_key)
):
    """Main query endpoint for RAG system"""
    try:
        start_time = time.time()
        
        # Execute workflow
        result = await handle_query(request.text, "u_1", session_id)

        print("Got handle_query result")
        
        return QueryResponse(
            session_id= result["session_id"],
            request_id= result["request_id"],
            text_response= result["text_response"],
            chart_configs= result["chart_configs"],
            sources= [],  # Implement source tracking
            latency_ms= (time.time() - start_time) * 1000
        )
        
    except Exception as e:
        logger.error(f"Query failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Processing error")

@router.get("/get-conversations/{user_id}")
async def get_user_conversations_endpoint(
    user_id: str,
    auth: bool = Depends(validate_api_key)
):
    """Retrieve all conversations for a user"""
    try:
        conversations = await get_user_conversations(user_id)
        
        return conversations

    except Exception as e:
        logger.error(f"Error retrieving user conversations: {str(e)}")
        raise HTTPException(status_code=500, detail="Error retrieving user conversations")


@router.get("/conversation-messages/{session_id}")
async def get_conversation_endpoint(
    session_id: str,
    auth: bool = Depends(validate_api_key)
):
    """Retrieve conversation history for a session"""
    try:
        history = await get_conversation_messages(session_id)
        
        return {
            "session_id": session_id,
            "messages": history,
        }
    
    except Exception as e:
        logger.error(f"Error retrieving conversation: {str(e)}")
        raise HTTPException(status_code=500, detail="Error retrieving conversation")

@router.get("/get-company-health", response_model=PerformanceReport)
async def get_company_health_endpoint(
    auth: bool = Depends(validate_api_key)
):
    """
    Retrieves the SQL schema using get_database_schema,
    then generates KPI-related SQL queries from the schema.
    """
    try:
        # Retrieve the schema from your database
        schema = await get_database_schema()
        # If the returned schema has a "tables" key, use that; otherwise, assume it's a flat dict.
        tables = schema.get("tables", schema)
        
        # Generate KPI SQL queries using the provided schema tables
        kpi_queries = generate_kpi_sql_queries(tables)

        results = []
        for query in kpi_queries.sql_queries:
            try:
                logger.debug("Executing SQL query: %s", query)
                result = execute_sql_query(query)
                logger.debug("SQL query result: %s", result)
                results.append({"query": query, "data": result})
            except Exception as e:
                logger.exception("Error executing SQL query: %s", query)
                results.append({"query": query, "error": str(e)})
        
        context = []
        context.append("SQL Results:\n" + json.dumps(results, indent=2))

        report = generate_performance_report(context)

        return report
    
    except Exception as e:
        logger.error(f"Health Retrieval failed: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/generate-report/{request_id}", response_model=Report)
async def generate_report_endpoint(
    request_id: str, 
    auth: bool = Depends(validate_api_key)
):
    """Generate a professional report from RAG context"""

    context_data = redis_client.get(request_id)
    if context_data is None:
        raise HTTPException(status_code=404, detail="No context data available for the given request ID.")

    try:        
        # Decode and parse JSON directly
        context_data_dict = json.loads(context_data.decode("utf-8"))  

        # Pass the dictionary directly
        report = generate_structured_report(context_data_dict)  
        return report
    
    except Exception as e:
        logger.error(f"Report generation failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Report generation error: {str(e)}")

PDF_UPLOAD_FOLDER = "pdfs"
GENERATED_MARKDOWN_FOLDER = "markdowns"

os.makedirs(PDF_UPLOAD_FOLDER, exist_ok=True)
os.makedirs(GENERATED_MARKDOWN_FOLDER, exist_ok=True)

@router.post("/process-pdf")
async def process_pdf_endpoint(
    pdf: UploadFile = File(...),
    premium_mode: bool = Form(False),
    auth: bool = Depends(validate_api_key)
):
    """API endpoint to upload and process a PDF file."""
    
    if pdf.content_type != "application/pdf" or not pdf.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are allowed.")
    
    try:
        file_path = os.path.join(PDF_UPLOAD_FOLDER, pdf.filename)
        file_content = await pdf.read()

        async with aiofiles.open(file_path, "wb") as pdf_file:
            await pdf_file.write(file_content)

        # Use async parser and async loading
        parser = LlamaParse(result_type="markdown", premium_mode=premium_mode)
        file_extractor = {".pdf": parser}

        print(f"Processing PDF: {file_path}")
        # Use async version of load_data
        reader = SimpleDirectoryReader(input_files=[file_path], file_extractor=file_extractor)
        documents = await reader.aload_data()
        markdown_content = "\n".join([doc.text for doc in documents])

        markdown_filename = pdf.filename.replace(".pdf", ".md")
        markdown_path = os.path.join(GENERATED_MARKDOWN_FOLDER, markdown_filename)

        async with aiofiles.open(markdown_path, "w", encoding="utf-8") as md_file:
            await md_file.write(markdown_content)

        await process_document(markdown_content, file_path, "pdf")

        return {"filename": pdf.filename, "status": "Processed successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/process-website")
async def process_website_endpoint(
    request: UrlsRequest,
    auth: bool = Depends(validate_api_key)
):
    try:
        if not request.urls:
            raise HTTPException(status_code=400, detail="No URLs provided.")
        
        results = await crawl_website(request.urls)

        # Filter and gather successful results
        successful_results = [(result.url, result.markdown) for result in results if result.success]
        if not successful_results:
            raise HTTPException(status_code=500, detail="Failed to crawl any URLs.")
        
        urls, markdowns = zip(*successful_results)
        main_url = urlparse(urls[0]).netloc
        
        # Process the collected markdowns as a batch
        await process_document(list(markdowns), main_url, "webpage")
        
        return {
            "message": "Crawling and processing completed",
            "base_url": main_url,
            "processed_urls": urls
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error processing website: {str(e)}"
        )

app.include_router(router, prefix="/api/v1")

if __name__ == "__main__":
    uvicorn.run(
        "graph_main:app",
        host="0.0.0.0",
        port=8000,
        log_config=None,  # Disable default uvicorn logs
        reload=False  # Disable reload on Windows
    )