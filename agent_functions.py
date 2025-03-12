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

class RefineQueryResponse(BaseModel):
    final_query: str

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
    
def refine_query(context: dict) -> RefineQueryResponse:
    
    system_prompt = f"""
    You are an expert query rewriter specialized in enhancing user queries for improved document retrieval using cosine similarity. Given the conversation history and the current query, your task is to generate a final, self-contained query that clearly captures the user's intent. 

    Guidelines:
    - Analyze the conversation history to understand context, including previous questions and answers.
    - Rewrite ambiguous or context-dependent queries to include relevant details from the conversation.
    - Ensure that the final query is explicit and can stand on its own for retrieving the most relevant chunks.
    - Do not include any additional commentary; output only the refined query.

    For example, if the conversation includes "How many items in store?" and the current query is "Name them," it can be rewritten as "Name the items in the store."

    Apply these guidelines to every query to generate the most suitable and context-aware final query.

    Return your answer as a JSON object following this schema:
    {json.dumps(RefineQueryResponse.model_json_schema(), indent=2)}
    """
    try:
        context_json = json.dumps(context, indent=2)

        chat_completion = groq.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": context_json}
            ],
            model="llama-3.3-70b-versatile",
            response_format={"type": "json_object"}
        )

        return RefineQueryResponse.model_validate_json(chat_completion.choices[0].message.content)
    
    except Exception as e:
        print(f"LLM call failed: {e}")
        return RefineQueryResponse(content=f"Error: {str(e)}")

def classify_user_input(context: dict) -> ClassifyInput:

    system_prompt = f"""
    You are an assistant that must decide whether to use Retrieval Augmented Generation (RAG) for answering a user's query.
    Consider both the current query and any conversation history (if given) when making your decision.

    Instructions:
    1. If the query is conversational or doesn't require external data (e.g. greetings, general knowledge ie Questions You can answer on your own), answer using your own knowledge without retrieving any external data. In these cases, set "needs_rag" to false and do not include "data_source".
    2. If the query references previous data discussions, asks for user-specific data or explicitly mentions data sources (Questions You can not answer on your own without specific context), then you must perform RAG. Set "needs_rag" to true.
    - If the query specifically mentions a data source:
        - Use "sql" if it instructs you to look only in the SQL database.
        - Use "docs" if it instructs you to search only in the documents.
    - If no specific data source is mentioned but RAG is needed, use "both" to indicate that both SQL data and documents should be considered.
    
    Return your answer as a JSON object following this schema:
    {json.dumps(ClassifyInput.model_json_schema(), indent=2)}
    """

    try:
        context_json = json.dumps(context, indent=2)

        chat_completion = groq.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": context_json,
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



def select_relevant_documents(documents: List[Document], context: dict) -> Doc_Ids:
    system_prompt = f"""
    You are an expert document selector. Analyze which documents could help answer the query considering both the current request and conversation history (if given).

    Key Considerations:
    1. Analyze the FULL CONVERSATION CONTEXT to understand:
       - References to previous information
       - Ongoing discussions or analysis threads
       - Implicit context for the current query
    2. Document selection criteria:
       - Select documents whose FULL CONTENT (not just summary) might conatin information that could answer the query
       - Include documents needed to understand context references
       - Prioritize documents mentioned in conversation history
    3. Return only document IDs - empty list if none relevant

    Required JSON schema:
    {json.dumps(Doc_Ids.model_json_schema(), indent=2)}
    """
    
    try:
        context_json = json.dumps(context, indent=2)
        docs_json = json.dumps([doc.model_dump() for doc in documents], indent=2)

        response = groq.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": json.dumps({"comtext": context_json, "documents": docs_json})}
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

def select_relevant_sql_tables(sql_schema: Dict[str, Any], context: dict) -> TablesRetrieved:
    system_prompt = f"""
        You are an expert SQL assistant with two tasks:
        1. Select tables relevant to answering the user query based on their columns.
        2. Generate one or more SQL queries using ONLY those tables that could satisfy the request and reflect the user's intent.

        Database schema structure:
        - JSON object with tables containing columns (name->type) and view_access.
        - Column types may have '!' indicating required (ignore this for querying).

        Instructions:
        1. **Analyze the full conversation context** when selecting tables and generating queries.
        2. **Handle implicit references** to previous queries or data.
        3. **Strictly select tables** whose columns are needed to answer the query.
        4. **Determine if the query is asking for multiple unrelated pieces of data.**
            - If different pieces of information **cannot be naturally joined**, create separate queries.
            - If all requested data is logically related (via joins), return a single optimized query.
        5. **Write SQL that:**
            - Uses only selected tables and their exact column names.
            - Includes required clauses (WHERE, JOINs, etc.).
            - Matches the query intent precisely.
            - Handles potential NULLs if needed.

        Return JSON with:
        {json.dumps(TablesRetrieved.model_json_schema(), indent=2)}
        """
    
    try:
        context_json = json.dumps(context, indent=2)
        schema_json = json.dumps(sql_schema, indent=4)

        response = groq.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": json.dumps({"context": context_json, "sql_schema": schema_json})}
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

def get_chart_configs(csv_list: List[str], context: dict) -> ChartConfigList:
    csv_context = "\n\n---\n\n".join(csv_list)
    
    system_prompt = f"""
        You are a data visualization expert. Given conversation context and a list of one or more CSV samples representing datasets, Your task is as follows:
        1. Thoroughly analyze each CSV sample to understand its context and overall structure and how it relates to the user's query or conversation history (if given).
        2. Identify all potential pairs of columns and the most appropriate chart type that can create meaningful visualizations.
        3. **Column Selection Criteria:**
        - **Label Column (X-axis/Grouping):** 
            * Typically categorical values (e.g., region, date, category)
            * Must be distinct values that group/classify data
            * Cannot contain duplicate values when used for grouping
        - **Value Column (Y-axis/Measurement):** 
            * Numerical values that represent measurements (e.g., sales, counts, percentages)
            * Should be aggregatable metrics (sum, average, etc.)
        - **Critical Rule:** Label and value columns MUST be different columns - never use the same column for both roles
        
        4. Based on the user query, decide whether to generate (0-3) chart configurations:
        - Generate 1 config for simple CSVs (<4 columns)
        - Multiple configs only when showing different perspectives (when multiple CSVs or CSVs with many columns are available)
        - No configs if CSV has 1 column only or the conversation and the provided CSVs are competely unrelated
        
        5. Provide concise, descriptive titles showing: 
        - Measured value
        - Grouping dimension
        - Time period (if relevant)
        
        6. Output JSON object strictly following schema:
        {json.dumps(ChartConfigList.model_json_schema(), indent=2)}
    """

    try:
        context_json = json.dumps(context, indent=2)
        
        response = groq.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": f"Context: {context_json}\n\nCSV Samples:\n{csv_context}"}
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

