# main.py
import asyncio
import json
import time
import os
import uvicorn
from typing import Dict, List, Optional
from fastapi import FastAPI, APIRouter, Depends, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.security import APIKeyHeader
from pydantic import BaseModel
from agent_functions import ChartConfigList, PerformanceReport, Report, generate_kpi_sql_queries, generate_performance_report, generate_structured_report
from lang_graph import handle_query
from logging_config import logger
from supabase_database import execute_sql_query, get_database_schema
from websocket_manager import manager
from redis_config import get_redis_client

redis_client = get_redis_client()

app = FastAPI(
    title="RAG Agent API",
    description="Multi-source RAG System with SQL/Document Integration",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
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
    session_id: Optional[str] = None
    preferences: Optional[dict] = None

class QueryResponse(BaseModel):
    request_id: str
    text_response: str
    chart_configs: Optional[ChartConfigList] = None
    sources: List[str]
    session_id: Optional[str] = None
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

@router.post("/query", response_model=QueryResponse)
async def process_query(
    request: QueryRequest, 
    auth: bool = Depends(validate_api_key)
):
    """Main query endpoint for RAG system"""
    try:
        start_time = time.time()
        
        # Execute workflow
        result = await handle_query(request.text)

        print("Got handle_query result")
        
        return QueryResponse(
            request_id= result["request_id"],
            text_response= result["text_response"],
            chart_configs= result["chart_configs"],
            sources= [],  # Implement source tracking
            session_id= request.session_id,
            latency_ms= (time.time() - start_time) * 1000
        )
        
    except Exception as e:
        logger.error(f"Query failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Processing error")

@router.get("/get-company-health", response_model=PerformanceReport)
async def get_company_health(
    auth: bool = Depends(validate_api_key)
):
    """
    Retrieves the SQL schema using get_database_schema,
    then generates KPI-related SQL queries from the schema.
    """
    try:
        # Retrieve the schema from your database
        schema = get_database_schema()
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
async def generate_report(
    request_id: str, 
    auth: bool = Depends(validate_api_key)
):
    """Generate a professional report from RAG context"""
    try:
        context_data = redis_client.get(request_id)
        if context_data is None:
            return "No context data available for the given request ID."
        
        # Decode and parse JSON directly
        context_data_dict = json.loads(context_data.decode("utf-8"))  

        # Pass the dictionary directly
        report = generate_structured_report(context_data_dict)  
        return report
    
    except Exception as e:
        logger.error(f"Report generation failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Report generation error")

app.include_router(router, prefix="/api/v1")

if __name__ == "__main__":
    uvicorn.run(
        "graph_main:app",
        host="0.0.0.0",
        port=8000,
        log_config=None,  # Disable default uvicorn logs
        reload=True
    )