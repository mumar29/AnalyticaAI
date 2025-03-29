# graph_main.py
import env_config
import asyncio
from contextlib import asynccontextmanager
import json
import time
import os
import pdfkit
from urllib.parse import urlparse
import aiofiles
import uvicorn
from typing import Dict, List, Literal, Optional
from fastapi import FastAPI, APIRouter, Depends, File, Form, HTTPException, Response, UploadFile, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import APIKeyHeader
from pydantic import BaseModel, ValidationError
from llama_parse import LlamaParse
from llama_index.core import SimpleDirectoryReader
from agent_functions import ChartConfig, PerformanceReport, Report, UpdateReportRequest, generate_kpi_sql_queries, generate_performance_report, generate_structured_report, get_chart_configs, update_strutured_report
from auth import User, create_access_token, get_current_user, get_password_hash, verify_password
from chunk_md import process_document
from context_storage import CURRENT_ORG_ID
from crawler import crawl_website
from database_provider import DatabaseProvider
from lang_graph import handle_query
from llm_provider import LLMConnection, LLMProvider
from logging_config import logger
from models import DatabaseConnection
from supabase_database import create_user, fetch_sql_db_credentials, get_user, register_organization, set_llm_api_key, fetch_llm_api_key, get_conversation_messages, get_database_schema, get_user_conversations, set_sql_db_credentials, update_control_table_access, update_document_access
from supabase_provider import SupabaseProvider
from utils import execute_query, json_default, list_dict_to_csv, save_credentials_to_env
from websocket_manager import manager
from redis_config import get_redis_client

redis_client = get_redis_client()

async def ensure_db_initialized(current_user: User = Depends(get_current_user)):
    try:
        # This call will only fetch the configuration if no connection exists yet.
        DatabaseProvider.get_or_initialize(current_user.organization_id)
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to initialize database connection for org {current_user.organization_id}: {str(e)}"
        )

async def ensure_llm_initialized(current_user: User = Depends(get_current_user)):
    try:
        # This call will only fetch the configuration if no connection exists yet.
        LLMProvider.get_or_initialize(current_user.organization_id)

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to initialize LLM connection for org {current_user.organization_id}: {str(e)}"
        )

# @asynccontextmanager
# async def lifespan(app: FastAPI):
#     """Lifespan event to fetch API key once on startup."""
#     request = fetch_sql_db_credentials()
#     if request:
#         request_data = DatabaseConnection(**request)
#         DatabaseProvider.initialize(request_data)

#     credentials = fetch_llm_api_key()  # Fetch and store the API key on startup
#     print("Fetched credentials:", credentials)  # Debugging line

#     if credentials:
#         request_data = LLMConnection(provider=credentials["provider"], api_key=credentials["api_key"])
#         LLMProvider.initialize(request_data)
#     yield  # Let FastAPI run

app = FastAPI(
    title="RAG Agent API",
    description="Multi-source RAG System with SQL/Document Integration",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    # lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows requests from any origin
    allow_credentials=True,
    allow_methods=["GET", "POST"],  # Allowed HTTP methods
    allow_headers=[
        "Content-Type",
        "Authorization",
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Origin"
    ],  # Allowed headers
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

class UpdateTableAccessRequest(BaseModel):
    table_name: str
    access_level: Literal["admin", "manager", "member"]

class UpdateDocumentAccessRequest(BaseModel):
    doc_id: int
    access_level: Literal["admin", "manager", "member"]

class QueryResponse(BaseModel):
    session_id: str
    request_id: str
    text_response: str
    chart_configs: Optional[ChartConfig] = None
    sources: List[str]
    latency_ms: float

class PerformanceReportResponse(BaseModel):
    text_response: str
    chart_configs: Optional[ChartConfig] = None

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

class DatabaseSetup(BaseModel):
    url: str
    key: str

class OrganizationCreate(BaseModel):
    org_name: str
    admin_name: str
    admin_email: str
    admin_password: str

class UserCreate(BaseModel):
    name: str
    email: str
    password: str
    role: Literal["admin", "manager", "member"] = "member"

class LoginRequest(BaseModel):
    email: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str

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

@router.get("/")
def health():
    return {"status": "ok"}

@router.post("/register")
async def register_organization_endpoint(org_data: OrganizationCreate):
    """Create new organization with admin user"""

    hashed_pw = get_password_hash(org_data.admin_password)

    org_id = await register_organization(
        org_data.org_name,
        org_data.admin_name,
        org_data.admin_email.lower(),
        hashed_pw
    )
    return {"organization_id": org_id}

@router.post("/login", response_model=TokenResponse)
async def login_endpoint(login_data: LoginRequest):
    # Get user from database
    user = await get_user(login_data.email.lower())
    
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
        
    # Verify password
    if not verify_password(login_data.password, user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # Create token
    access_token = create_access_token(User(
        id=user["id"],
        organization_id=user["organization_id"],
        role=user["role"]
    ))
    
    return {
        "access_token": access_token,
        "token_type": "bearer"
    }

@router.post("/create-user")
async def create_user_endpoint(
    user_data: UserCreate,
    current_user: User = Depends(get_current_user)
):
    """Admin creates new organization member"""
    if current_user.role != "admin":
        raise HTTPException(403, "Admin privileges required")
    
    hashed_pw = get_password_hash(user_data.password)
    user = await create_user(current_user.organization_id, user_data.name, user_data.email.lower(), hashed_pw, user_data.role)
    
    return {"user_id": user[0]["id"]}

@router.post("/set-sql-database")
async def set_sql_database(
    request: DatabaseConnection,
    current_user: User = Depends(get_current_user),
):
    """Update database credentials using dynamic request parameters"""
    try:

        if current_user.role != "admin":
            raise HTTPException(403, "Admin privileges required")

        # Initialize database provider with validated request data
        response = await set_sql_db_credentials(current_user.organization_id, request)

        if response.get("success"):  # Ensure we check for a successful response
            DatabaseProvider.get_or_initialize(current_user.organization_id)

        return {
            "status": "success",
            "message": f"Connected to {request.database_type} database",
            "data": response
        }
    
    except ValidationError as e:
        return {"status": "error", "message": f"Validation error: {str(e)}"}
    
    except ConnectionError as e:
        return {"status": "error", "message": f"Connection failed: {str(e)}"}
    
    except Exception as e:
        return {"status": "error", "message": f"Unexpected error: {str(e)}"}

@router.post("/setup-main-database")
def setup_main_database(
    request: DatabaseSetup
):
    """Update database credentials and execute SQL setup file."""
    # Save credentials to .env
    save_credentials_to_env(request.url, request.key)

    os.environ["SUPABASE_URL"] = request.url
    os.environ["SUPABASE_KEY"] = request.key

    # Reset and reinitialize Supabase client
    SupabaseProvider.reset_client()

    return {
        "status": "success",
        "message": f"Updated main database",
    }

@router.post("/set-llm-api-key")
async def set_llm_api_key_endpoint(
    request: LLMConnection,
    current_user: User = Depends(get_current_user),
):
    """Update LLM api key"""
    try:

        if current_user.role != "admin":
            raise HTTPException(403, "Admin privileges required")

        response = await set_llm_api_key(current_user.organization_id, request)

        if response.get("success"):  # Ensure we check for a successful response
            LLMProvider.get_or_initialize(current_user.organization_id)

        return {
            "status": "success",
            "message": f"Updated {request.provider} api key",
            "data": response
        }

    except HTTPException as http_exc:
        raise http_exc
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")

@router.post("/query", response_model=QueryResponse)
@router.post("/query/{session_id}", response_model=QueryResponse)
async def process_query_endpoint(
    request: QueryRequest,
    current_user: User = Depends(get_current_user),
    db_check: None = Depends(ensure_db_initialized),
    llm_check: None = Depends(ensure_llm_initialized),
    session_id: Optional[str] = None
):
    """Main query endpoint for RAG system"""
    try:
        start_time = time.time()
        
        # Execute workflow
        result = await handle_query(request.text, current_user.id, current_user.organization_id, current_user.role, session_id)

        print("Got handle_query result")
        
        return QueryResponse(
            session_id= result["session_id"],
            request_id= result["request_id"],
            text_response= result["text_response"],
            chart_configs= result["chart_configs"],
            sources= [],  # Implement source tracking
            latency_ms= (time.time() - start_time) * 1000
        )

    except HTTPException as http_exc:
        raise http_exc  

    except Exception as e:
        logger.error(f"Query failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Query failed: {str(e)}")

@router.get("/get-conversations")
async def get_user_conversations_endpoint(
    current_user: User = Depends(get_current_user)
):
    """Retrieve all conversations for a user"""
    try:
        conversations = await get_user_conversations(current_user.id)
        
        return conversations

    except Exception as e:
        logger.error(f"Error retrieving user conversations: {str(e)}")
        raise HTTPException(status_code=500, detail="Error retrieving user conversations")


@router.get("/conversation-messages/{session_id}")
async def get_conversation_endpoint(
    session_id: str,
    current_user: User = Depends(get_current_user)
):
    """Retrieve conversation history for a session"""
    try:
        history = await get_conversation_messages(current_user.id, session_id)

        if history is None:
            raise HTTPException(status_code=404, detail="Conversation not found.")

        return {
            "session_id": session_id,
            "messages": history,
        }

    except HTTPException as e:
        raise e

    except Exception as e:
        logger.error(f"Error retrieving conversation: {str(e)}")
        raise HTTPException(status_code=500, detail="Error retrieving conversation")

# @router.get("/get-company-health", response_model=PerformanceReport)
# async def get_company_health_endpoint(
#     db_check: None = Depends(ensure_db_initialized),
#     llm_check: None = Depends(ensure_llm_initialized)
# ):
#     """
#     Retrieves the SQL schema using get_database_schema,
#     then generates KPI-related SQL queries from the schema.
#     """
#     try:
#         # Retrieve the schema from your database
#         schema = await get_database_schema()
#         # If the returned schema has a "tables" key, use that; otherwise, assume it's a flat dict.
#         tables = schema.get("tables", schema)
        
#         # Generate KPI SQL queries using the provided schema tables
#         kpi_queries = generate_kpi_sql_queries(tables)

#         results = []
#         for query in kpi_queries.sql_queries:
#             try:
#                 logger.debug("Executing SQL query: %s", query)
#                 result = execute_query(query)
#                 logger.debug("SQL query result: %s", result)
#                 results.append({"query": query, "data": result})
#             except Exception as e:
#                 logger.exception("Error executing SQL query: %s", query)
#                 results.append({"query": query, "error": str(e)})
        
#         context = []
#         context.append("SQL Results:\n" + json.dumps(results, default=json_default, indent=2))

#         report = generate_performance_report(context)

#         return report
    
#     except Exception as e:
#         logger.error(f"Health Retrieval failed: {str(e)}")
#         raise HTTPException(status_code=500, detail=str(e))


@router.get("/get-company-health", response_model=PerformanceReportResponse)
async def get_company_health_endpoint(
    db_check: None = Depends(ensure_db_initialized),
    llm_check: None = Depends(ensure_llm_initialized),
    current_user: User = Depends(get_current_user)
):
    """
    Retrieves the SQL schema using get_database_schema,
    then generates KPI-related SQL queries from the schema.
    Executes each query, converts the results to CSV,
    and uses those CSVs to generate chart configurations.
    Finally, a performance report is generated with both
    text and chart configurations.
    """
    try:
        # Retrieve the schema from your database
        request_key = f"organization:{current_user.organization_id}:request:health"
        
        # Check if we already have a cached response
        cached_response = redis_client.get(request_key)
        if cached_response:
            # If a cached response exists, load and return it
            cached_data = json.loads(cached_response)
            return PerformanceReportResponse(**cached_data)

        schema = await get_database_schema()
        tables = schema.get("tables", schema)
        
        # Generate KPI SQL queries using the provided schema tables
        kpi_queries = generate_kpi_sql_queries(tables)

        results = []
        csv_list = []
        for query in kpi_queries.sql_queries:
            try:
                logger.debug("Executing SQL query: %s", query)
                query_result = execute_query(query)
                csv_result = list_dict_to_csv(query_result)
                logger.debug("SQL query result (CSV): %s", csv_result)
                results.append({
                    "tables_involved": kpi_queries.tables_involved,  # include table names here
                    "data": csv_result
                })
                if csv_result:
                    csv_list.append(csv_result)
            except Exception as e:
                logger.exception("Error executing SQL query: %s", query)
                results.append({
                    "tables_involved": kpi_queries.tables_involved,  # include table names here
                    "error": str(e)
                })

        # Prepare context with SQL results for generating the report
        context = "SQL Results:\n" + json.dumps(results, default=json_default, indent=2)
        
        # Generate chart configurations using the collected CSV results
        chart_configs = None
        if csv_list:
            # Create a minimal context similar to previous implementation
            context_data = {
                "current_user_query": "Get Important company health metrics and performance data",
                "context": {
                    "sql_results": results
                }
            }
            chart_configs = get_chart_configs(csv_list, context_data)
            logger.debug("Chart configurations generated: %s", chart_configs)

        # Generate the performance report, including chart configurations if available.
        text_report = generate_performance_report(context)

        response = PerformanceReportResponse(
            text_response=text_report.report,
            chart_configs=chart_configs
        )

        redis_client.set(request_key, json.dumps(response.dict()), ex=86400)
        
        return response
    
    except Exception as e:
        logger.error(f"Health Retrieval failed: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/generate-report/{request_id}", response_model=Report)
async def generate_report_endpoint(
    request_id: str,
    current_user: User = Depends(get_current_user),
    _: None = Depends(ensure_llm_initialized),
):
    """Generate a professional report from RAG context"""

    request_key = f"user:{current_user.id}:request:{request_id}"
    context_data = redis_client.get(request_key)
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

@router.post("/update_strutured_report", response_model=Report)
async def update_strutured_report_endpoint(
    instructions_data: UpdateReportRequest,
    current_user: User = Depends(get_current_user),
    _: None = Depends(ensure_llm_initialized),
):
    try:
        report = update_strutured_report(instructions_data)  
        return report
        
    except Exception as e:
        print(f"Error updating report: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to update report: {str(e)}")

@router.post("/get_pdf_report")
async def generate_pdf_report_endpoint(
    html_report: Report,
    current_user: User = Depends(get_current_user),
):
    html_content = html_report.html
    # Generate PDF in-memory (the second parameter is False to return PDF as a byte string)
    pdf = pdfkit.from_string(html_content, False)
    # Return the PDF with the appropriate media type
    return Response(content=pdf, media_type="application/pdf")

PDF_UPLOAD_FOLDER = "pdfs"
GENERATED_MARKDOWN_FOLDER = "markdowns"

os.makedirs(PDF_UPLOAD_FOLDER, exist_ok=True)
os.makedirs(GENERATED_MARKDOWN_FOLDER, exist_ok=True)

@router.post("/process-pdf")
async def process_pdf_endpoint(
    pdf: UploadFile = File(...),
    premium_mode: bool = Form(False),
    current_user: User = Depends(get_current_user),
    _: None = Depends(ensure_llm_initialized),
):
    """API endpoint to upload and process a PDF file."""
    
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Admin privileges required")

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

        await process_document(markdown_content, file_path, "pdf", current_user.organization_id)

        return {"filename": pdf.filename, "status": "Processed successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/process-website")
async def process_website_endpoint(
    request: UrlsRequest,
    current_user: User = Depends(get_current_user),
    _: None = Depends(ensure_llm_initialized),
):
    try:

        if current_user.role != "admin":
            raise HTTPException(status_code=403, detail="Admin privileges required")

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
        await process_document(list(markdowns), main_url, "webpage", current_user.organization_id)
        
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

@router.post("/update_table_access_level")
async def update_table_access_level_endpoint(
    request: UpdateTableAccessRequest,
    current_user: User = Depends(get_current_user),
):
    """Update Table Access Level"""
    try:

        if current_user.role != "admin":
            raise HTTPException(403, "Admin privileges required")

        response = await update_control_table_access(current_user.organization_id, request.table_name, request.access_level)

        if response:
            return {
                "status": "success",
                "message": f"Access level updated of table {request.table_name} to {request.access_level} successfully"
            }

    except HTTPException as http_exc:
        raise http_exc
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")

@router.post("/update_document_access_level")
async def update_document_access_level_endpoint(
    request: UpdateDocumentAccessRequest,
    current_user: User = Depends(get_current_user),
):
    """Update Table Access Level"""
    try:

        if current_user.role != "admin":
            raise HTTPException(403, "Admin privileges required")

        response = await update_document_access(current_user.organization_id, request.doc_id, request.access_level)

        if response:
            return {
                "status": "success",
                "message": f"Access level updated of table {request.doc_id} to {request.access_level} successfully"
            }

    except HTTPException as http_exc:
        raise http_exc
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")

app.include_router(router, prefix="/api/v1")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(
        "graph_main:app",
        host="0.0.0.0",
        port=port,
        log_config=None,  # Disable default uvicorn logs
        reload=False  # Disable reload on Windows
    )