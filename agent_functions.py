import json
from typing import Any, Dict, List, Literal, Optional, Set
from pydantic import BaseModel, model_validator
from utils import generate_completion

class IndexedCSV(BaseModel):
    csv_index: int
    content: str

class CSVCollection(BaseModel):
    csvs: List[IndexedCSV]

class Mapping(BaseModel):
    label_column: str
    value_column: str

class Chart(BaseModel):
    csv_index: int
    title: str
    type: Literal["bar", "line", "pie", "radar", "doughnut", "scatter", "bubble", "polararea"]
    mapping: Mapping

class ChartConfigList(BaseModel):
    charts: List[Chart]
    csv_collection: CSVCollection

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

class CSVHeaderCorrection(BaseModel):
    original_headers: List[str]
    revised_headers: List[str]

class Instruction(BaseModel):
    id: int
    selectedText: str
    instruction: str

class UpdateReportRequest(BaseModel):
    originalHtml: str
    generalInstruction: Optional[str] = None
    specificInstructions: Optional[List[Instruction]] = None

    @model_validator(mode="after")
    def check_constraints(self):
        if not self.generalInstruction and not self.specificInstructions:
            raise ValueError("Either 'generalInstruction' must be provided or 'specificInstructions' must contain at least one item.")
        if self.generalInstruction is None and not self.specificInstructions:
            raise ValueError("If 'generalInstruction' is None, 'specificInstructions' must not be empty.")
        if self.specificInstructions is None and not self.generalInstruction:
            raise ValueError("If 'specificInstructions' is None, 'generalInstruction' must not be empty.")
        return self

def call_llm(system_prompt: str, user_content: str) -> LLMResponse:
    try:
        response_content = generate_completion(system_prompt, user_content, LLMResponse.model_json_schema())
        return LLMResponse.model_validate_json(response_content)
    
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

        response_content = generate_completion(system_prompt, context_json, RefineQueryResponse.model_json_schema())

        return RefineQueryResponse.model_validate_json(response_content)
    
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
    """

    try:
        context_json = json.dumps(context, indent=2)

        response_content = generate_completion(system_prompt, context_json, ClassifyInput.model_json_schema())

        return ClassifyInput.model_validate_json(response_content)

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
    """
    
    try:        
        context_json = json.dumps(context, indent=2)
        docs_json = json.dumps([doc.model_dump() for doc in documents], indent=2)
        user_content = f"context: {context_json}\n\ndocuments:\n{docs_json}"

        response_content = generate_completion(system_prompt, user_content, Doc_Ids.model_json_schema())

        return Doc_Ids.model_validate_json(response_content)
        
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
        2. Generate one or more SQL queries using ONLY those tables that:
            - Directly satisfy the main data request from the user.
            - Retrieve additional supporting data that offers context or deeper insights.
            - Include supplementary queries that provide complementary details—such as aggregated views, breakdowns, or detailed listings—when they add analytical value.
        
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
        6. **For additional context:** 
            - In addition to the main query, generate extra query(s) that retrieve related data that can be used for further insights.
    """

    
    try:
        context_json = json.dumps(context, indent=2)
        schema_json = json.dumps(sql_schema, indent=4)
        user_content = f"context: {context_json}\n\nsql_schema:\n{schema_json}"

        response_content = generate_completion(system_prompt, user_content, TablesRetrieved.model_json_schema())
        
        return TablesRetrieved.model_validate_json(response_content)
        
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
    """
    
    try:

        # Construct the schema JSON from the provided sql_schema dictionary.
        schema_json = json.dumps(sql_schema, indent=2)

        response_content = generate_completion(system_prompt, schema_json, KPIQueriesRetrieved.model_json_schema())
        
        # Validate and return the response using the KPIQueriesRetrieved model.
        return KPIQueriesRetrieved.model_validate_json(response_content)
        
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
    """
    
    try:

        # Convert the sql_results list into a JSON string.
        results_json = json.dumps(sql_results, indent=2)

        response_content = generate_completion(system_prompt, results_json, PerformanceReport.model_json_schema())
        
        # Validate and return the response using the PerformanceReport model.
        return PerformanceReport.model_validate_json(response_content)
        
    except Exception as e:
        print(f"Error generating performance report: {e}")
        return PerformanceReport(report=f"Error: {str(e)}")
    
def generate_structured_report(context_data: Dict[str, Any]) -> Report:
    system_prompt = f"""
    You are an HTML Report Generator that produces complete, professional business reports in HTML format.

    Your task is to generate a professional report based on the provided context, the user's current query, and any relevant past conversation messages. The report should be centered on the user's latest query, but if previous conversation messages (including both user queries and AI responses) contain additional details or data that relate to this topic, you must integrate that information to create a richer, more comprehensive report.

    Guidelines:
    1. **Relevance Check:** Review the entire conversation history. Use the past conversation data only if it is directly related to the current query. If there are multiple queries on similar topics, combine them to provide a complete view.
    2. **Introduction:** Start by introducing the topic in your own words if it’s not already fully covered in the provided context.
    3. **Detailed Analysis:** Include any additional insights, future predictions, or suggestions that enhance the report. Organize the information into sections using appropriate headings.
    4. **Formatting:** 
    - Output a complete, valid HTML document including `<html>`, `<head>`, and `<body>` tags.
    - Use inline CSS or internal `<style>` tags for professional styling.
    - Use bullet points or numbered lists where applicable.

    Return the full working HTML document in the output.
    """

    try:

        schema_json = json.dumps(context_data, indent=2)

        response_content = generate_completion(system_prompt, schema_json, Report.model_json_schema())
        
        return Report.model_validate_json(response_content)
        
    except Exception as e:
        print(f"Error generating report: {e}")
        return {
            "error": "Failed to generate report.",
            "details": str(e)
        }

def update_strutured_report(instructions_data: UpdateReportRequest) -> Report:
    system_prompt = f"""You are an HTML Report Updater that produces updated, complete, professional business reports in HTML format.
    Your task is to generate an updated version of an existing report by applying the modifications and instructions provided by the user. The updated report should reflect all requested changes while preserving the original report's structure and professional styling.

    Please ensure that:
    1. The output is a complete, valid HTML document, including <html>, <head>, and <body> tags.
    2. All modifications specified in the instructions are accurately incorporated into the report. This includes updates to content, styling, and layout.
    3. The report maintains a professional tone and structure, using appropriate headings (e.g., <h1>, <h2>), paragraphs (<p>), and lists (ordered or unordered) as needed.
    4. The updated report uses inline CSS or internal <style> tags to ensure a polished and visually appealing design.
    5. The core structure and branding of the original report are preserved, while integrating the new content seamlessly.
    6. If additional insights or contextual details are provided, incorporate them where they add value to the updated report.
    """

    try:
        schema_dict  = instructions_data.model_dump()
        schema_json = json.dumps(schema_dict , indent=2)

        response_content = generate_completion(system_prompt, schema_json, Report.model_json_schema())
        
        return Report.model_validate_json(response_content)
        
    except Exception as e:
        print(f"Error updating report: {e}")
        return {
            "error": "Failed to update report.",
            "details": str(e)
        }

def infer_missing_headers(csv: str, max_columns: int) -> CSVHeaderCorrection:
    system_prompt = f"""
        You are an expert in CSV data correction. The given CSV has a **header mismatch**: 
        - The header row has **fewer columns** than the data rows. 
        - Your task is to generate a revised **header row** that properly aligns with the data.
        - **Do NOT** add extra columns beyond the detected number.

        The number of column names you generate **must be exactly** {max_columns}.
    """

    try:
        csv_json = json.dumps(csv , indent=2)

        response_content = generate_completion(system_prompt, csv_json, CSVHeaderCorrection.model_json_schema())
        
        return CSVHeaderCorrection.model_validate_json(response_content)
        
    except Exception as e:
        print(f"Error inferring missing headers: {e}")
        return {
            "error": "Failed to infer missing headers.",
            "details": str(e)
        }

def get_chart_configs(csv_list: List[str], context: dict) -> Optional[ChartConfigList]:
    
    # system_prompt = f"""
    #     You are a data visualization expert. Given conversation context and a list of one or more CSV samples representing datasets, your task is as follows:
    #     1. Thoroughly analyze each CSV sample (each CSV is assigned an index, starting from 0) to understand its context and overall structure and how it relates to the user's query or conversation history (if given).
    #     2. Identify all potential pairs of columns and the most appropriate chart type that can create meaningful visualizations.
    #     3. **Column Selection Criteria:**
    #        - **Label Column (X-axis/Grouping):** 
    #          * Typically categorical values (e.g., region, date, category)
    #          * Must be distinct values that group/classify data
    #          * Cannot contain duplicate values when used for grouping
    #        - **Value Column (Y-axis/Measurement):** 
    #          * Numerical values that represent measurements (e.g., sales, counts, percentages)
    #          * Should be aggregatable metrics (sum, average, etc.)
    #        - **Critical Rule:** Label and value columns MUST be different columns - never use the same column for both roles
    #     4. Based on the user query, decide whether to generate (0-3) chart configurations:
    #        - Generate 1 config for simple CSVs (<4 columns)
    #        - Multiple configs only when showing different perspectives (when multiple CSVs or CSVs with many columns are available)
    #        - No configs if CSV has 1 column only or the conversation and the provided CSVs are completely unrelated
    #     5. For each chart configuration, include a new field called "csv_index" that indicates the index of the CSV sample (from the provided list) used to generate that configuration.
    #     6. Provide concise, descriptive titles showing:
    #        - Measured value
    #        - Grouping dimension
    #        - Time period (if relevant)
    # """

    system_prompt = f"""
    You are a data visualization expert. Given conversation context and a list of one or more CSV samples (each assigned an index) representing datasets, your task is to generate VALID chart configurations by following these STRICT RULES:

    1. CSV VALIDATION:
        - Reject CSVs with: 
            • Only 1 column
            • Only 1 data row
        - Process CSVs with:
            • At least 1 categorical column (text/dates) 
            • At least 1 other column (numerical or categorical)

    2. COLUMN RULES (MUST FOLLOW):
        ■ Label column (X-axis): 
            - Categorical/text data (e.g., "Month", "Category")
            - Unique values (no duplicates)
        ■ Value column (Y-axis):
            - Numerical data (e.g., "Sales", "Quantity") OR
            - Categorical data for counts/frequencies (e.g., "Category" → count occurrences)
            - MUST be different from label column

    3. CHART CREATION:
        • Total charts MUST be 0-3 across ALL CSVs
        • For EACH valid and relevant CSV:
            - Create 1-2 configurations for Simple CSVs (2-4 columns)
            - Create 1-3 configurations for Complex  CSVs (4+ columns) only if they show unique perspectives
            - Choose chart type based on data:
                → Trends: line/bar
                → Comparisons: bar/pie
                → Distributions: histogram (for numerical data)
                → Frequencies: bar/pie (for categorical counts)
        • Skip CSVs that don't match user request context

    4. STRICT PROHIBITIONS:
    ❌ Never use same column for label and value
    ❌ Never use same label/value pair in multiple charts
    ❌ No charts for single-column CSVs
    ❌ No imaginary columns - use only what exists

    5. Provide concise, descriptive Titles for each chart configuarion
    """

    try:

        csv_collection = CSVCollection(
            csvs=[IndexedCSV(csv_index=i, content=csv) for i, csv in enumerate(csv_list)]
        )
        csv_json = csv_collection.model_dump_json(indent=2)
        context_json = json.dumps(context, indent=2)
        user_content = f"Context: {context_json}\n\nCSV Samples:\n{csv_json}"

        response_content = generate_completion(system_prompt, user_content, ChartConfigList.model_json_schema())

        # Validate response against the model
        raw_config = ChartConfigList.model_validate_json(response_content)
        
        # Second pass: Validate and collect used indices
        used_indices: Set[int] = set()
        valid_charts = []
        
        for chart in raw_config.charts:
            # Skip charts with invalid CSV indices
            if not (0 <= chart.csv_index < len(csv_list)):
                print(f"Skipping chart with invalid csv_index {chart.csv_index}")
                continue
                
            # Skip charts where label_column and value_column are the same
            if chart.mapping.label_column == chart.mapping.value_column:
                print(f"Skipping chart with identical label and value columns: {chart.mapping.label_column}")
                continue
                
            # Add to valid charts and track the used CSV index
            used_indices.add(chart.csv_index)
            valid_charts.append(chart)

        if not valid_charts:
            return None

        # Build minimal CSV collection
        minimal_csvs = [
            IndexedCSV(csv_index=i, content=csv_list[i])
            for i in sorted(used_indices)  # Maintain original order
        ]

        return ChartConfigList(
            charts=valid_charts,
            csv_collection=CSVCollection(csvs=minimal_csvs)
        )

    except Exception as e:
        print(f"Error getting chart config: {e}")
        return None
