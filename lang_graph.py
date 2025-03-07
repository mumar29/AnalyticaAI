import json
import uuid
from langgraph.graph import StateGraph, END
from typing import TypedDict, Optional, List
from langchain_core.messages import HumanMessage, AIMessage
from redis_config import get_redis_client

from agent_functions import ChartConfigList, call_llm, classify_user_input, get_chart_configs, select_relevant_documents, select_relevant_sql_tables
from supabase_database import execute_sql_query, get_database_schema, retrieve_all_documents, retrieve_chunks_tables, retrieve_relevant_chunks
from logging_config import logger
from utils import list_dict_to_csv
from websocket_manager import manager

redis_client = get_redis_client()

# Define state schema
class AgentState(TypedDict):
    user_input: str
    needs_rag: Optional[bool]
    data_source: Optional[str]
    sql_results: Optional[List[dict]]
    doc_results: Optional[dict]
    final_response: Optional[dict]

# Initialize workflow graph
workflow = StateGraph(AgentState)

# 1. Routing Decision Node
async def route_query(state: AgentState):
    logger.info("Routing query: %s", state["user_input"])
    await manager.broadcast("Classifying your query") 
    
    classification = classify_user_input(state["user_input"])
    logger.debug("Classification result: %s", classification)
    
    if hasattr(classification, "error"):
        logger.error("Classification failed: %s", classification.get("details"))
        raise ValueError(f"Classification failed: {classification.get('details')}")
    
    decision = {
        "needs_rag": classification.needs_rag,
        "data_source": classification.data_source if classification.needs_rag else None
    }
    logger.info("Routing decision: %s", decision)
    return decision

workflow.add_node("router", route_query)

# 2. SQL Processing Node
async def process_sql(state: AgentState):
    if state["data_source"] in ["both", "sql"]:
        logger.info("Processing SQL query for: %s", state["user_input"])
        schema = get_database_schema()

        await manager.broadcast("Identifying relevant SQL tables and generating SQL queries") 

        tables = select_relevant_sql_tables(schema, state["user_input"])
        logger.debug("SQL queries generated: %s", tables.sql_queries)
        
        results = []
        for query in tables.sql_queries:
            try:
                logger.debug("Executing SQL query: %s", query)
                result = execute_sql_query(query)
                csv_result = list_dict_to_csv(result)
                logger.debug("SQL query result: %s", csv_result)
                results.append({"query": query, "data": csv_result})
            except Exception as e:
                logger.exception("Error executing SQL query: %s", query)
                results.append({"query": query, "error": str(e)})

        return {"sql_results": results}
    return {"sql_results": None}

workflow.add_node("sql_processor", process_sql)

# 3. Document Processing Node 
async def process_docs(state: AgentState):
    if state["data_source"] in ["both", "docs"]:
        logger.info("Processing document retrieval for: %s", state["user_input"])
        docs = await retrieve_all_documents()
        logger.debug("Documents retrieved: %s", docs)
        
        await manager.broadcast("Identifying relevant PDF documents and their sections") 
        selected = select_relevant_documents(docs, state["user_input"])
        logger.debug("Documents selected: %s", selected)
        
        chunk_ids, chunks_text = await retrieve_relevant_chunks(selected.ids, state["user_input"])
        chunk_tables = await retrieve_chunks_tables(chunk_ids)

        logger.debug("Retrieved document chunks: %s", chunks_text)

        result = {
            "chunks_text": chunks_text, 
            "chunk_tables": chunk_tables
        }

        return {"doc_results": result}
    return {"doc_results": None}

workflow.add_node("doc_processor", process_docs)

# 4. Response Generation Node
async def generate_response(state: AgentState):
    logger.info("Generating final response.")
    await manager.broadcast("Generating the query response") 

    if not state["needs_rag"]:
        result = call_llm(
            system_prompt="You are a helpful assistant",
            user_content=state["user_input"]
        )
        logger.debug("LLM result (non-RAG): %s", result.content)
        response = {
            "text_response": result.content,
            "chart_configs": None
        }
        return {"final_response": response}

    # Build RAG context
    context_data = {
        "user_query": state["user_input"],
        "context": {
            "sql_results": state.get("sql_results", []),
            "doc_results": {"chunks_text": state["doc_results"]["chunks_text"]} if state.get("doc_results") else {}
        }
    }
    
    user_content = json.dumps(context_data, indent=2)
    logger.debug("Context for RAG: %s", user_content)
    
    rag_result = call_llm(
        system_prompt="""You are a data analyst. Given a user's query and the context, generate a coherent response. Be concise but thorough.""",
        user_content=user_content
    )
    logger.debug("LLM result (RAG): %s", rag_result.content)
    
    all_csv_list = []

    # Add CSV strings from SQL results
    if state["sql_results"]:
        for entry in state["sql_results"]:
            if "data" in entry and entry["data"]:
                all_csv_list.append(entry["data"])

    # Add CSV strings from document processing
    if state.get("doc_results") and state["doc_results"].get("chunk_tables"):
        all_csv_list.extend(state["doc_results"]["chunk_tables"])

    await manager.broadcast("Generating visualizations") 

    # Call get_chart_configs with the collected CSV list and the user query.
    chart_configs = get_chart_configs(all_csv_list, state["user_input"]) if all_csv_list else None

    logger.debug("Chart configurations: %s", chart_configs)

    response = {
        "text_response": rag_result.content,
        "chart_configs": chart_configs
    }

    return {"final_response": response}

workflow.add_node("response_generator", generate_response)

# 5. Parallel Processing Coordinator Node
def process_sources(state: AgentState):
    # Just passes through state to trigger parallel execution
    return state

workflow.add_node("process_sources", process_sources)

# Define workflow edges
workflow.set_entry_point("router")

# Conditional edges based on RAG need
def decide_branches(state: AgentState):
    if not state["needs_rag"]:
        return "response_generator"
    return "parallel_processing"  # Now points to process_sources

workflow.add_conditional_edges(
    "router",
    decide_branches,
    {
        "response_generator": "response_generator",
        "parallel_processing": "process_sources"  # Single node
    }
)

# Connect parallel processing coordinator to actual processors
workflow.add_edge("process_sources", "sql_processor")
workflow.add_edge("process_sources", "doc_processor")

# Connect processors to response generator
workflow.add_edge("sql_processor", "response_generator")
workflow.add_edge("doc_processor", "response_generator")

workflow.add_edge("response_generator", END)

# Compile the workflow
app = workflow.compile()

# RAG Usage
async def handle_query(user_input: str):
    request_id = str(uuid.uuid4())

    initial_state = {
        "user_input": user_input
    }

    result = await app.ainvoke(initial_state)

    print("Got generate_response node result")

    # Build context data from the workflow for potential report generation
    context_data = {
        "user_query": user_input,
        "context": {
            "sql_results": result.get("sql_results", []),
            "doc_results": {"chunks_text": result["doc_results"]["chunks_text"]} if result.get("doc_results") else {}
        }
    }
    
    # Store context data in Redis as a JSON string with an expiration time (e.g., 1 hour)
    redis_client.set(request_id, json.dumps(context_data), ex=3600)
    
    final_response_data = result["final_response"]  # Extract the dictionary

    final_response = {
        "text_response": final_response_data["text_response"],
        "chart_configs": final_response_data["chart_configs"],
        "request_id": request_id
    }

    # Return only the final response and the request ID to the client
    return final_response