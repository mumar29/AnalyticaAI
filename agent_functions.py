import json
from typing import Any, Dict, List, Literal, Optional, Set
from fastapi import HTTPException
from pydantic import BaseModel, model_validator
from utils import generate_completion, is_valid_csv

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

class ChartConfig(BaseModel):
    primary_charts: List[Chart]
    secondary_charts: Optional[List[Chart]] = []
    csv_collection: CSVCollection

class ProcessConv(BaseModel):
    title: str

class ProcessSum(BaseModel):
    summary: str

class ProcessDocument(BaseModel):
    title: str
    summary: str

class Document(BaseModel):
    id: int
    title: str
    summary: str

class Select_Docs(BaseModel):
    user_query: str
    docs: List[Document]

class Doc_Ids(BaseModel):
    ids: List[int]

class TableQuery(BaseModel):
    tables_involved: List[str]  # List of all tables used in the query.
    direct_queries: List[str]
    supplementary_queries: Optional[List[str]] = []  # Optional, defaulting to an empty list

class TablesRetrieved(BaseModel):
    tables: List[TableQuery]

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
    tables_involved: List[str]
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

def generate_final_response(user_content: str, needs_rag: bool, is_admin: bool) -> LLMResponse:
    chart_instruction = ' Additionally, if the user requests a chart or graph, ignore the request and say "Is there anything else I can help with?"'

    if needs_rag:
        base_prompt = (
            "You are a data analyst. Given the user's query and the accompanying context data, generate a coherent, concise, and thorough response. "
            "If the available data cannot directly answer the query, inform the user that this may be due to missing data{}."
        )
        # If the user is admin, they have highest level access so we exclude the access permissions message.
        access_note = "" if is_admin else ", or insufficient access permissions"
        system_prompt = base_prompt.format(access_note) + chart_instruction
    else:
        system_prompt = "You are a helpful assistant."

    try:
        response_content = generate_completion(system_prompt, user_content, LLMResponse.model_json_schema())
        return LLMResponse.model_validate_json(response_content)
    
    except Exception as e:
        print(f"Failed to generate final response: {e}")
        raise e

def generate_title_and_summary(chunk: str, summary_range: str = "1-2") -> ProcessDocument:
    system_prompt = f"""You are an expert documentation analyst capable of handling diverse inputs—plain text or markdown, full documents or chunks, technical or business content. Extract a concise title and a brief summary using these rules:
        Title:
        - If a main heading is present (e.g., "# Getting Started"), use it exactly.
        - Otherwise, generate a 3-5 word title without markdown formatting.
        - Prioritize technical terms when relevant.

        Summary:
        - Provide {summary_range} clear sentences capturing key points, technical terms, and important details.
        - Avoid markdown formatting.
        """
 
    try:
        response_content = generate_completion(system_prompt, chunk, ProcessDocument.model_json_schema())
        return ProcessDocument.model_validate_json(response_content)
    
    except Exception as e:
        print(f"Error getting title and summary: {e}")
        return {
            "title": "Error Processing Title",
            "summary": "Error Processing Summary"
        }

def generate_intermediate_summary(chunk_summaries: str) -> ProcessSum:
    system_prompt = """You are an expert at condensing multiple chunk summaries that belong to some portion of a document into a 
    shorter intermediate summary. Your task is to identify the most important information across these 
    summaries and create a concise synthesis that preserves key technical details, main points, and 
    critical context. Keep your response to 2-3 sentences."""
    
    try:
        
        response_content = generate_completion(system_prompt, chunk_summaries, ProcessSum.model_json_schema())
        return ProcessSum.model_validate_json(response_content)
    
    except Exception as e:
        print(f"Error generating intermediate summary: {e}")
        return {
            "summary": "Error Processing Intermediate Summary"
        }
        
def generate_conversation_title(messages: list) -> ProcessConv:
    system_prompt = f"""You are conversation title generator, given the first two messages of a conversation session, your task is to generate a suitable title for the conversation
        """
 
    try:
        context_json = json.dumps(messages, indent=2)
        response_content = generate_completion(system_prompt, context_json, ProcessConv.model_json_schema())
        return ProcessConv.model_validate_json(response_content)
    
    except Exception as e:
        print(f"Error getting conversation title: {e}")
        return {
            "title": "Error Processing Conversation Title",
        }

def generate_conversation_summary(new_messages: str, existing_summary: str | None) -> LLMResponse:
    """Generates an updated conversation summary using LLM."""

    system_prompt="You are a conversation summarizer"

    if existing_summary:
        user_prompt = f"""
        You are an expert summarizer specializing in maintaining and updating conversation context. 
        Update the existing conversation summary by integrating the new messages provided below. 
        Ensure that the updated summary is concise, informative, and accurately captures the key points, 
        important terms, and essential context from both the USER and AI. In this updated summary, please give 
        extra weight to the most recent interactions to highlight the latest context, while still retaining 
        critical information from earlier in the conversation.

        Existing Summary:
        {existing_summary}

        New Messages:
        {new_messages}

        Provide an updated, concise, and informative summary that effectively combines both.
        """
    else:
        user_prompt = f"""
        You are an expert summarizer specializing in conversation context management. 
        Summarize the conversation below in a concise and informative manner, capturing key points, 
        important terms, and essential data from both the USER and AI. In your summary, please prioritize 
        the most recent interactions to ensure that the latest context is emphasized.

        Conversation:
        {new_messages}
        """
    try:
        response_content = generate_completion(system_prompt, user_prompt, LLMResponse.model_json_schema())
        return LLMResponse.model_validate_json(response_content)
    
    except Exception as e:
        print(f"Failed to generate final response: {e}")
        raise e
    
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
        raise e

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
        print(f"Failed to classify user input: {e}")
        raise e
    
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
        raise e

def select_relevant_sql_tables(sql_schema: Dict[str, Any], context: dict) -> TablesRetrieved:
    
    # system_prompt = f"""
    #     You are an advanced SQL query optimization assistant with enhanced contextual understanding.

    #     Core Principles:
    #     1. Go beyond literal user query interpretation.
    #     2. Infer implicit information needs from the conversation context.
    #     3. Generate comprehensive, context-rich queries that provide maximum insight.
    #     4. Prioritize user experience and information depth over minimal query requirements.

    #     Query Generation Strategy:
    #     - Always include ALL relevant columns that provide meaningful context.
    #     - Create queries that go beyond minimal requirements, anticipating potential follow-up questions.
    #     - Prefer a single optimized query that retrieves all required data using joins and table combinations, instead of multiple smaller queries.

    #     Additional Insights Rules:
    #     - Do not include a table or query if it does not contribute additional value or context.

    #     Database Schema Structure:
    #     - You are provided with a JSON object containing tables with columns (name->type) and view_access.
    #     - Note that column types may have an exclamation mark (!) indicating required fields (this can be ignored for querying).

    #     Instructions:
    #     1. Analyze the full conversation context, including implicit and explicit information needs.
    #     2. Strictly select only those tables whose columns are essential for answering the query.
    #     3. If the query involves multiple pieces of information:
    #     - If the data is related, return a single optimized query that covers all required aspects using joins or table combinations.
    #     - Create separate queries only if the information cannot be naturally joined.
    #     4. For each optimized query, generate:
    #     - **Direct queries:** One or more queries that directly answer the main request, including all implicitly required columns.
    #     - **Supplementary queries:** Optional additional queries for extra insights or breakdowns, only if they add meaningful value.
    #     5. In the output, for each query object, include all the table names used.

    #     Ensure that your output is valid JSON according to the provided schema.
    # """

    system_prompt = f"""
        You are a SQL query generation assistant. Select relevant tables from schema based on:

        SELECTION CRITERIA:
        • Analyze conversation context thoroughly for both explicit AND IMPLICIT information needs
        • Choose tables containing columns that provide all the necessary context even if not directly requested
        • Prioritize complete, informative results with depth over minimal query requirements

        QUERY STRATEGY:
        • Include all implicitly relevant columns that add context or answer potential follow-ups
        • Prefer single optimized queries with joins over multiple separate queries
        • Create separate queries only when information cannot be logically joined

        OUTPUT:
        • For each query, list all selected table names
        • Structure: Direct queries (main answer) + Supplementary queries (additional insights)

        NOTE: Schema format shows tables with columns (name->type) and view_access. Ignore exclamation marks (!) in column types.
    """

    try:
        context_json = json.dumps(context, indent=2)
        schema_json = json.dumps(sql_schema, indent=4)
        user_content = f"context: {context_json}\n\nsql_schema:\n{schema_json}"

        response_content = generate_completion(system_prompt, user_content, TablesRetrieved.model_json_schema())
        
        return TablesRetrieved.model_validate_json(response_content)
        
    except Exception as e:
        print(f"Error selecting relevant SQL sources: {e}")
        raise e


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
        raise e

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
        raise e
    
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

    5. **Chart Images:**
    - The context includes chart_images data with details about charts to be included in the report.
    - For each chart in the chart_images array, create an appropriate image tag at a relevant position in the report.
    - Use the chart's title as the id attribute and alt text for the image tag.
    - Format each image tag as: <img id="chart-[title]" class="report-chart" alt="[title]" src="placeholder" data-chart-type="[chart_type]" data-x-axis="[label_column]" data-y-axis="[value_column]">
    - Position each chart in a logical place within the report content, where it best supports the surrounding text.
    - Add a figure caption below each chart using the title.

    Return the full working HTML document in the output.
    """

    try:

        schema_json = json.dumps(context_data, indent=2)

        response_content = generate_completion(system_prompt, schema_json, Report.model_json_schema())
        
        return Report.model_validate_json(response_content)
        
    except Exception as e:
        print(f"Error generating report: {e}")
        raise e

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
        raise e

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
        raise e


def get_chart_configs(csv_list: List[str], context: dict) -> Optional[ChartConfig]:

    system_prompt = f"""
        You are a data visualization expert. Generate VALID chart configurations from CSV samples (with indices) according to these PRIORITY RULES:

        1. USER PREFERENCES (HIGHEST PRIORITY):
            • Honor explicit user requirements when present (chart type, number of charts, columns, comparisons)
            • If user requests are infeasible, choose closest practical alternative

        2. AUTO CHART SELECTION (WHEN NO USER SPECIFICATIONS):
            • Primary charts (1-2 max): Directly answer user query
            • Secondary charts (optional): Only if adding significant value
            • Data-appropriate chart type: trends→line/bar, comparisons→bar/pie, distributions→bar, frequencies→pie/doughnut
            • Maximum 3 charts total across primary and secondary

        3. MANDATORY COLUMN RULES:
            • Label column: Categorical/text data with unique values
            • Value column: Numerical data OR categorical for counts
            • MUST be different columns for label and value

        4. PROHIBITIONS:
            • No duplicate column usage for label/value
            • No reusing same label/value pairs across charts
            • No imaginary columns - use only what exists.

        5. TOPIC RELEVANCE:
            • Ensure that the generated chart configurations are aligned with the overall topic and content of the final textual response.
            • Charts that are thematically related and add visual support to the discussion are acceptable.       
            
        Skip irrelevant CSVs (CSVs that don't match user request context) and provide concise chart titles.
    """

    try:
        # Preprocess CSVs: filter out invalid CSVs
        valid_csv_entries = [(i, csv) for i, csv in enumerate(csv_list) if is_valid_csv(csv)]
        if not valid_csv_entries:
            return None

        # Create a mapping of original index to CSV content for valid CSVs
        valid_indices = {i for i, _ in valid_csv_entries}
        csv_list_filtered = {i: csv for i, csv in valid_csv_entries}

        # Build the CSVCollection using only valid CSVs
        csv_collection = CSVCollection(
            csvs=[IndexedCSV(csv_index=i, content=csv) for i, csv in csv_list_filtered.items()]
        )
        csv_json = csv_collection.model_dump_json(indent=2)
        context_json = json.dumps(context, indent=2)
        user_content = f"Context: {context_json}\n\nCSV Samples:\n{csv_json}"

        # Generate completion based on the updated system prompt and expected JSON schema
        response_content = generate_completion(system_prompt, user_content, ChartConfig.model_json_schema())

        # Validate response against the model
        raw_config = ChartConfig.model_validate_json(response_content)

        # Second pass: Validate and collect used indices for CSVs from both primary and secondary charts
        used_indices: Set[int] = set()
        valid_primary_charts = []
        valid_secondary_charts = []

        # Process primary charts
        for chart in raw_config.primary_charts:
            if chart.csv_index not in valid_indices:
                print(f"Skipping primary chart with invalid csv_index {chart.csv_index}")
                continue
            if chart.mapping.label_column == chart.mapping.value_column:
                print(f"Skipping primary chart with identical label and value columns: {chart.mapping.label_column}")
                continue
            used_indices.add(chart.csv_index)
            valid_primary_charts.append(chart)

        # Process secondary charts
        if raw_config.secondary_charts:
            for chart in raw_config.secondary_charts:
                if chart.csv_index not in valid_indices:
                    print(f"Skipping secondary chart with invalid csv_index {chart.csv_index}")
                    continue
                if chart.mapping.label_column == chart.mapping.value_column:
                    print(f"Skipping secondary chart with identical label and value columns: {chart.mapping.label_column}")
                    continue
                used_indices.add(chart.csv_index)
                valid_secondary_charts.append(chart)

        # Ensure there is at least one valid primary chart
        if not valid_primary_charts:
            return None

        # Limit primary charts to 2 at maximum
        valid_primary_charts = valid_primary_charts[:2]

        # Build minimal CSV collection using only the CSV indices that were used
        minimal_csvs = [
            IndexedCSV(csv_index=i, content=csv_list[i])
            for i in sorted(used_indices)
        ]

        return ChartConfig(
            primary_charts=valid_primary_charts,
            secondary_charts=valid_secondary_charts,
            csv_collection=CSVCollection(csvs=minimal_csvs)
        )

    except Exception as e:
        print(f"Error getting chart config: {e}")
        raise e
