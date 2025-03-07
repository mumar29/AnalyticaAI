from typing import Any, Dict, List, Literal, Optional
import os
import json
import uvicorn

from pydantic import BaseModel
from groq import Groq
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

groq = Groq(api_key=os.getenv("GROQ_API_KEY"))

class ChartConfig(BaseModel):
    user_query: str
    csv_list: List[str]

class Mapping(BaseModel):
    label_column: str
    value_column: str

class Chart(BaseModel):
    title: str
    type: Literal["bar", "line", "pie", "radar", "doughnut", "scatter", "bubble", "polararea"]
    mapping: Mapping

class ChartConfigList(BaseModel):
    charts: List[Chart]

class Document(BaseModel):
    id: int
    title: str
    summary: str

class Select_Docs(BaseModel):
    user_query: str
    docs: List[Document]

class Doc_Ids(BaseModel):
    ids: List[int]

class TablesRetrieved(BaseModel):
    table_names: List[str]
    sql_queries: List[str]

class Table(BaseModel):
    columns: Dict[str, str]
    view_access: List[str]

class Select_Tables(BaseModel):
    user_query: str
    tables: Dict[str, Table]

class UserInput(BaseModel):
    user_input: str

class ClassifyInput(BaseModel):
    needs_rag: bool
    data_source: Optional[Literal["both", "sql", "docs"]]

class LLMResponse(BaseModel):
    content: str

class KPIQueriesRetrieved(BaseModel):
    sql_queries: List[str]

class PerformanceReport(BaseModel):
    report: str

class Report(BaseModel):
    html: str

def call_llm(system_prompt: str, user_content: str) -> LLMResponse:
    try:
        system_prompt += f""" Return your answer as a JSON object following this schema:
        {json.dumps(LLMResponse.model_json_schema(), indent=2)}"""

        chat_completion = groq.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_content}
            ],
            model="llama-3.3-70b-versatile",
            response_format={"type": "json_object"}
        )

        return LLMResponse.model_validate_json(chat_completion.choices[0].message.content)
    
    except Exception as e:
        print(f"LLM call failed: {e}")
        return LLMResponse(content=f"Error: {str(e)}")

def classify_user_input(query: str) -> ClassifyInput:
    system_prompt = f"""
    You are an assistant that must decide whether to use Retrieval Augmented Generation (RAG) for answering a user's query.

    Instructions:
    1. If the user's query is a simple conversation or a generic question (e.g. "Hi, my name is Rayan" or "What is the capital of France?"), answer using your own knowledge without retrieving any external data. In these cases, set "needs_rag" to false and do not include "data_source".
    2. If the query refers to the user's own data or explicitly instructs you to search for data (e.g. "find my recent orders" or "only look for the answer in the SQL database"), then you must perform RAG. Set "needs_rag" to true.
    - If the query specifically mentions a data source:
        - Use "sql" if it instructs you to look only in the SQL database.
        - Use "docs" if it instructs you to search only in the documents.
    - If no specific data source is mentioned but RAG is needed, use "both" to indicate that both SQL data and documents should be considered.
    
    Return your answer as a JSON object following this schema:
    {json.dumps(ClassifyInput.model_json_schema(), indent=2)}
    """

    try:
        chat_completion = groq.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": query,
                },
            ],
            model="llama-3.3-70b-versatile",
            response_format={"type": "json_object"},
        )

        return ClassifyInput.model_validate_json(chat_completion.choices[0].message.content)

    except Exception as e:
        print(f"Error getting chart config: {e}")
        return {
            "error": "Failed to generate chart configuration.",
            "details": str(e)
        }

def select_relevant_documents(documents: List[Document], user_query: str) -> Doc_Ids:
    system_prompt = f"""
        You are an expert document selector. Given a user query and a list of documents (each with an ID, title, and summary), analyze which documents' full content is most likely to contain information relevant to the query. You may select zero, one, or multiple documents.
        Base selections strictly on whether the document's FULL CONTENT (not just summary) could answer the query.
        Return a list of just the ids of the documents you select. If no documents are relevant, return an empty list.

        The JSON object must use the following schema:
        {json.dumps(Doc_Ids.model_json_schema(), indent=2)}"""
    
    try:
        docs_json = json.dumps([doc.model_dump() for doc in documents], indent=2)

        response = groq.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": json.dumps({"user_query": user_query, "documents": docs_json})}
            ],
            response_format={ "type": "json_object" },
            model="llama-3.3-70b-versatile"
        )

        return Doc_Ids.model_validate_json(response.choices[0].message.content)
        
    except Exception as e:
        print(f"Error selecting relevant documents: {e}")
        return {
            "error": "Failed to select relevant documents.",
            "details": str(e)
        }

def select_relevant_sql_tables(sql_schema: Dict[str, Any], user_query: str) -> TablesRetrieved:
    system_prompt = f"""
        You are an expert SQL assistant with two tasks:
        1. Select tables relevant to answering the user query based on their columns.
        2. Generate one or more SQL queries using ONLY those tables that could satisfy the request and reflect the user's intent.

        Database schema structure:
        - JSON object with tables containing columns (name->type) and view_access.
        - Column types may have '!' indicating required (ignore this for querying).

        Instructions:
        1. **Strictly select tables** whose columns are needed to answer the query.
        2. **Determine if the query is asking for multiple unrelated pieces of data.**
        - If different pieces of information **cannot be naturally joined**, create separate queries.
        - If all requested data is logically related (via joins), return a single optimized query.
        3. **Write SQL that:**
        - Uses only selected tables and their exact column names.
        - Includes required clauses (WHERE, JOINs, etc.).
        - Matches the query intent precisely.
        - Handles potential NULLs if needed.

        Return JSON with:
        {json.dumps(TablesRetrieved.model_json_schema(), indent=2)}
        """
    
    try:
        schema_json = json.dumps(sql_schema, indent=4)

        response = groq.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": json.dumps({"user_query": user_query, "sql_schema": schema_json})}
            ],
            response_format={"type": "json_object"},
            model="llama-3.3-70b-versatile"
        )
        
        return TablesRetrieved.model_validate_json(response.choices[0].message.content)
        
    except Exception as e:
        print(f"Error selecting relevant SQL sources: {e}")
        return {
            "error": "Failed to select relevant SQL sources.",
            "details": str(e)
        }

def generate_kpi_sql_queries(sql_schema: Dict[str, Any]) -> KPIQueriesRetrieved:
    system_prompt = f"""
        You are an expert KPI SQL Query Generator. Your task is to analyze the provided database schema (in JSON format) and determine if any key performance indicators (KPIs) related to company performance and health can be extracted. 

        Database schema structure:
        - JSON object with tables containing columns (name->type) and view_access.
        - Column types may have '!' indicating required (ignore this for querying).

        Your responsibilities are:
        1. Examine each table and its columns to identify potential KPIs such as total revenue, order counts, average order value, customer activity, product performance, inventory levels, or any other measurable metrics related to business health.
        2. Based on the available columns and table relationships, generate one or more SQL queries that extract these KPI metrics.
            - Each query should use only the tables and their exact column names as provided in the schema.
            - Use appropriate SQL clauses (WHERE, GROUP BY, JOIN, etc.) to ensure meaningful results.
        3. If the schema does not contain any tables or columns that can provide KPI information, output a clear message stating that no KPI queries can be generated.

        Return the result as a JSON object with the following structure:
        {json.dumps(KPIQueriesRetrieved.model_json_schema(), indent=2)}
    """
    
    try:
        # Construct the schema JSON from the provided sql_schema dictionary.
        schema_json = json.dumps(sql_schema, indent=2)

        # Call the LLM (using a hypothetical groq.chat.completions.create API call)
        response = groq.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": json.dumps({"sql_schema": schema_json})}
            ],
            response_format={"type": "json_object"},
            model="llama-3.3-70b-versatile"
        )
        
        # Validate and return the response using the KPIQueriesRetrieved model.
        return KPIQueriesRetrieved.model_validate_json(response.choices[0].message.content)
        
    except Exception as e:
        print(f"Error generating KPI SQL queries: {e}")
        return {
            "error": "Failed to generate KPI SQL queries.",
            "details": str(e)
        }



def generate_performance_report(sql_results: List[Dict[str, Any]]) -> PerformanceReport:
    system_prompt = f"""
        You are a professional data analyst and business consultant. Your task is to analyze the provided results of SQL queries that extract key performance indicators (KPIs) related to a company's performance and health. The input is a JSON array where each element contains a SQL query and its result. 

        Your responsibilities are:
        1. Review the SQL query results to understand metrics such as total revenue, order counts, average order value, product performance, inventory levels, and customer activity.
        2. Summarize the data into a coherent narrative that highlights strengths, weaknesses, trends, and any noteworthy insights.
        3. Generate a user-friendly and professional report using clear, concise language suitable for business executives and stakeholders.
        4. Avoid technical jargon and focus on actionable insights and a high-level overview.

        Return the result as a JSON object with the following structure:
        {json.dumps(PerformanceReport.model_json_schema(), indent=2)}
    """
    
    try:
        # Convert the sql_results list into a JSON string.
        results_json = json.dumps(sql_results, indent=2)
        
        # Call the LLM (using a hypothetical groq.chat.completions.create API call)
        response = groq.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": json.dumps({"sql_results": results_json})}
            ],
            response_format={"type": "json_object"},
            model="llama-3.3-70b-versatile"
        )
        
        # Validate and return the response using the PerformanceReport model.
        return PerformanceReport.model_validate_json(response.choices[0].message.content)
        
    except Exception as e:
        print(f"Error generating performance report: {e}")
        return PerformanceReport(report=f"Error: {str(e)}")
    
def generate_structured_report(context_data: Dict[str, Any]) -> Report:
    system_prompt = f"""You are an HTML Report Generator that produces complete, professional business reports in HTML format.
        Generate a professional report based on the provided context. The report should be centered around the user's query and include only the information from the context that is directly relevant to that query.
        Dont straight away pick the relevant iformation from the context anf start the report from it, first introduce the topic (if this information isnt present in the context, you should include it youself). Similary include additional relevant insights or details that add value to the final report in context-appropriate sections. Make future predictictions if applicable and give suggestions
        
        Please ensure that:
        1. The output is a complete, valid HTML document, including <html>, <head>, and <body> tags.
        2. Use appropriate headings (e.g., <h1>, <h2>) and paragraphs (<p>) to structure the report.
        3. Apply professional styling using inline CSS or internal <style> tags to ensure the report looks visually appealing and polished.
        4. Use bullet points or numbered lists where applicable to organize information.

        Return the full working HTML document in the output.

        Return the result as a JSON object with the following structure:
        {json.dumps(Report.model_json_schema(), indent=2)}
        """
    
    try:
        schema_json = json.dumps(context_data, indent=2)

        response = groq.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": schema_json}
            ],
            response_format={"type": "json_object"},
            model="llama-3.3-70b-versatile"
        )
        
        return Report.model_validate_json(response.choices[0].message.content)
        
    except Exception as e:
        print(f"Error generating report: {e}")
        return {
            "error": "Failed to generate report.",
            "details": str(e)
        }

def get_chart_configs(csv_list: List[str], user_query: str) -> ChartConfigList:
    csv_context = "\n\n---\n\n".join(csv_list)
    
    system_prompt = f"""
        You are a data visualization expert. Given a user query and a list of one or more CSV samples representing datasets, Your task is as follows:
        1. Thoroughly analyze each CSV sample to understand the its context and overall structure and does it relate to the user's query.
        2. Identify all potential pairs of columns and the most appropriate chart type that can create meaningful visualizations.
        3. Based on the user query, decide whether to generate (0-3) chart configurations depending on the value they would add. If only one CSV is provided with a limited number of columns (e.g. only three columns), output only one chart configuration that best addresses the query. Generate multiple unique chart configurations only when multiple CSVs or CSVs with many columns are available, and each configuration provides a distinct insight. If the user query and the provided CSVs are competely unrelated, produce zero chart configs
        4. Provide a concise and descriptive title for each chart configuration.
        5. Output your results as a JSON object that strictly adheres to the following schema:
        {json.dumps(ChartConfigList.model_json_schema(), indent=2)}
    """

    try:
        response = groq.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": f"User Query: {user_query}\n\nCSV Samples:\n{csv_context}"}
            ],
            model="llama-3.3-70b-versatile",
            response_format={"type": "json_object"},
        )
        
        return ChartConfigList.model_validate_json(response.choices[0].message.content)

    except Exception as e:
        print(f"Error getting chart config: {e}")
        return {
            "error": "Failed to generate chart configuration.",
            "details": str(e)
        }

