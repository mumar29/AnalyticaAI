import asyncio
import json
import uuid
from fastapi import HTTPException
from langgraph.graph import StateGraph, END
from typing import TypedDict, Optional, List
from langchain_core.messages import HumanMessage, AIMessage
from redis_config import get_redis_client

from agent_functions import classify_user_input, generate_final_response, get_chart_configs, refine_query, select_relevant_documents, select_relevant_sql_tables
from supabase_database import get_database_schema, get_filtered_schema, get_or_create_conversation_session_and_history, retrieve_all_documents, retrieve_chunks_tables, retrieve_relevant_chunks, save_conversation_messages
from logging_config import logger
from utils import execute_query, json_default, list_dict_to_csv, simplify_messages, update_conversation_summary_incremental
from websocket_manager import manager

redis_client = get_redis_client()

# Define state schema
class AgentState(TypedDict):
    user_id: str
    org_id: str
    user_role: str
    session_id: str
    user_input: str
    recent_messages: Optional[List[dict]]
    conversation_summary: Optional[str]
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
    
    context = {
        "current_user_query": state["user_input"],
        "context": (
            {"previous_messages": state["recent_messages"]}
            if state["conversation_summary"] is None
            else {
                "recent_messages": state["recent_messages"],
                "conversation_summary": state["conversation_summary"]
            }
        )
    }

    classification = classify_user_input(context)
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
        schema = await get_filtered_schema(state["org_id"], state["user_role"])

        await manager.broadcast("Identifying relevant SQL tables and generating SQL queries") 

        context = {
            "current_user_query": state["user_input"],
            "context": (
                {"previous_messages": state["recent_messages"]}
                if state["conversation_summary"] is None
                else {
                    "recent_messages": state["recent_messages"],
                    "conversation_summary": state["conversation_summary"]
                }
            )
        }

        tables = select_relevant_sql_tables(schema, context)
        logger.debug("SQL queries generated for tables: %s", tables)

        results = []
        for table in tables.tables:
            table_result = {
                "tables_involved": table.tables_involved,
                "primary_data": [],
                "supplementary_data": []
            }

            # Execute direct (primary) queries
            for query in table.direct_queries:
                try:
                    logger.debug("Executing direct SQL query for tables %s: %s", table.tables_involved, query)
                    query_result = execute_query(query)
                    csv_result = list_dict_to_csv(query_result)
                    logger.debug("Direct SQL query result: %s", csv_result)
                    table_result["primary_data"].append(csv_result)
                except Exception as e:
                    logger.exception("Error executing direct SQL query for tables %s: %s", table.tables_involved, query)

            # Execute supplementary queries
            if table.supplementary_queries:
                for query in table.supplementary_queries:
                    try:
                        logger.debug("Executing supplementary SQL query for tables %s: %s", table.tables_involved, query)
                        query_result = execute_query(query)
                        csv_result = list_dict_to_csv(query_result)
                        logger.debug("Supplementary SQL query result: %s", csv_result)
                        table_result["supplementary_data"].append(csv_result)
                    except Exception as e:
                        logger.exception("Error executing supplementary SQL query for tables %s: %s", table.tables_involved, query)

            results.append(table_result)

        print("======================================================================")
        print("The final sql results are \n", {"sql_results": results if results else None})
        print("======================================================================")

        return {"sql_results": results if results else None}
    return {"sql_results": None}

workflow.add_node("sql_processor", process_sql)

# 3. Document Processing Node 
async def process_docs(state: AgentState):
    if state["data_source"] in ["both", "docs"]:
        logger.info("Processing document retrieval for: %s", state["user_input"])
        docs = await retrieve_all_documents(state["org_id"], state["user_role"])
        logger.debug("Documents retrieved: %s", docs)
        
        await manager.broadcast("Identifying relevant PDF documents and their sections") 

        context = {
            "current_user_query": state["user_input"],
            "context": (
                {"previous_messages": state["recent_messages"]}
                if state["conversation_summary"] is None
                else {
                    "recent_messages": state["recent_messages"],
                    "conversation_summary": state["conversation_summary"]
                }
            )
        }

        selected = select_relevant_documents(docs, context)
        logger.debug("Documents selected: %s", selected)
        
        new_query = state["user_input"]
        if state["conversation_summary"] is not None:
            new_query = refine_query(context).final_query

        chunk_ids_with_tables, chunks_text = await retrieve_relevant_chunks(selected.ids, new_query)
        
        chunk_tables = None  # Default to None

        if chunk_ids_with_tables:  # Only call if the list is not empty
            logger.debug("Chunk ids with tables are %s", chunk_ids_with_tables)
            chunk_tables = await retrieve_chunks_tables(chunk_ids_with_tables)

        logger.debug("Retrieved document chunks: %s", chunks_text)

        result = {
            "chunks_text": chunks_text, 
            "chunk_tables": chunk_tables
        }

        print("======================================================================")
        print("The final document results are \n", {"doc_results": result})
        print("======================================================================")

        return {"doc_results": result}
    return {"doc_results": None}

workflow.add_node("doc_processor", process_docs)

# 4. Response Generation Node
async def generate_response(state: AgentState):
    logger.info("Generating final response.")

    await manager.broadcast("Generating the query response")

    # Build Conversation context
    context_data = {
        "current_user_query": state["user_input"],
        "context": (
            {"previous_messages": state["recent_messages"]}
            if state["conversation_summary"] is None
            else {
                "recent_messages": state["recent_messages"],
                "conversation_summary": state["conversation_summary"]
            }
        )
    }

    if state["needs_rag"]:
        context_data["context"]["retrieval_results"] = {
            "sql_results": state.get("sql_results", []),
            "doc_results": {"chunks_text": state["doc_results"]["chunks_text"]} if state.get("doc_results") else {}
        }


    print("======================================================================")
    print("The final context is \n", context_data)
    print("======================================================================")

    user_content = json.dumps(context_data, default=json_default, indent=2)
    logger.debug("Context for LLM: %s", user_content)

    # Extract the is_admin flag from state (default to False if not provided)
    is_admin = state["user_role"] == "admin"
    
    # Call the unified generate_final_response function regardless of needs_rag
    result = generate_final_response(user_content, state["needs_rag"], is_admin)
    logger.debug("LLM result: %s", result.content)

    # If RAG is enabled, include retrieval results in the context and generate chart configurations.
    chart_configs = None
    if state["needs_rag"]:

        all_csv_list = []

        # Process SQL results from the updated structure (sql_results is a list)
        if state.get("sql_results"):
            for table in state["sql_results"]:
                # Add primary data (direct queries) CSV strings
                for csv_str in table.get("primary_data", []):
                    if csv_str:
                        all_csv_list.append(csv_str)
                # Add supplementary data CSV strings
                for csv_str in table.get("supplementary_data", []):
                    if csv_str:
                        all_csv_list.append(csv_str)

        # Add CSV strings from document processing
        if state.get("doc_results") and state["doc_results"].get("chunk_tables"):
            all_csv_list.extend(state["doc_results"]["chunk_tables"])

        logger.debug("Collected CSVs: %s", all_csv_list)

        await manager.broadcast("Generating visualizations") 

        # Call get_chart_configs with the collected CSV list and the user query.
        chart_configs = get_chart_configs(all_csv_list, context_data) if all_csv_list else None

        logger.debug("Chart configurations: %s", chart_configs)

    response = {
        "text_response": result.content,
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
async def handle_query(user_input: str, user_id: int, org_id: str, user_role: str, session_id: str | None = None):
    request_id = str(uuid.uuid4())

    # This function handles both retrieving an existing session and creating one if needed.
    session, conversation_history = await get_or_create_conversation_session_and_history(user_id, session_id, 8)
    if session is None:
        raise HTTPException(status_code=500, detail="Could not retrieve or create conversation session.")
    
    # Always use the valid session id from the returned session.
    session_id = str(session["id"])

    conversation_summary = session.get("summary", "")

    simplified_history = simplify_messages(conversation_history)

    initial_state = {
        "user_id": user_id,
        "org_id": org_id,
        "user_role": user_role,
        "session_id": session_id,
        "user_input": user_input,
        "conversation_summary": conversation_summary,
        "recent_messages": simplified_history,
    }

    result = await app.ainvoke(initial_state)

    print("Got generate_response node result")

    # Build context data from the workflow for potential report generation
    context_data = {
        "user_query": user_input,
        "context": {
            **(
                {
                    "previous_messages": simplified_history,
                    "retrieval_results": {
                        "sql_results": result.get("sql_results", []),
                        "doc_results": {"chunks_text": result["doc_results"]["chunks_text"]} if result.get("doc_results") else {}
                    }
                }
                if conversation_summary is None
                else {
                    "conversation_summary": conversation_summary,
                    "recent_messages": simplified_history,
                    "retrieval_results": {
                        "sql_results": result.get("sql_results", []),
                        "doc_results": {"chunks_text": result["doc_results"]["chunks_text"]} if result.get("doc_results") else {}
                    }
                }
            )
        }
    }

    
    # Store context data in Redis as a JSON string with an expiration time (e.g., 1 hour)
    request_key = f"user:{user_id}:request:{request_id}"
    redis_client.set(request_key, json.dumps(context_data), ex=3600)
    
    final_response_data = result["final_response"]  # Extract the dictionary

    messages = [
        {
            "conversation_id": session_id,
            "role": "USER",
            "text_content": user_input,
            "json_content": None
        },
        {
            "conversation_id": session_id,
            "role": "AI",
            "text_content": final_response_data["text_response"],
            "json_content": final_response_data["chart_configs"].model_dump() if final_response_data["chart_configs"] else None
        }
    ]

    await save_conversation_messages(messages)

    asyncio.create_task(update_conversation_summary_incremental(user_id, session_id))

    final_response = {
        "request_id": request_id,
        "session_id": session_id,
        "text_response": final_response_data["text_response"],
        "chart_configs": final_response_data["chart_configs"]
    }

    # Return only the final response and the request ID to the client
    return final_response