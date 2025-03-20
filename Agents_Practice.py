import json
import os
from typing import List
from dataclasses import dataclass
from pydantic import BaseModel
from pydantic_ai import Agent, RunContext
from supabase import Client, create_client

# Read from .env
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Initialize Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

@dataclass
class AgenticRAGDeps:
    supabase_client: Client

class Document(BaseModel):
    id: int
    title: str
    summary: str

class Doc_Ids(BaseModel):
    ids: List[int]

document_selector_agent = Agent(
    model = 'groq:llama-3.3-70b-versatile',
    deps_type = AgenticRAGDeps,
    result_type = Doc_Ids, # Expecting to return a Doc_Ids object now
    system_prompt = f"""
        You are an expert document selector. Given a user query, you will select relevant documents from a list of available documents.

        **Task Breakdown:**

        1. **Retrieve Document List:** Use the `retrieve_all_documents` tool to fetch a list of all available documents. Each document will have an ID, title, and summary.
        2. **Analyze Documents and User Query:**  Examine the titles and summaries of the retrieved documents in relation to the user query.
        3. **Select Relevant Documents:** Determine which documents' *full content* is most likely to contain information relevant to the query.  Focus on whether the document's *full content* (not just summary) could answer the query. You may select zero, one, or multiple documents.
        4. **Return Document IDs:** Return a JSON object containing a list of just the *ids* of the documents you select. If no documents are relevant, return an empty list in the "document_ids" field.

        **Output Format:**

        Return your response as a JSON object conforming to the following schema:
        {json.dumps(Doc_Ids.model_json_schema(), indent=2)}
        """
)

@document_selector_agent.tool
async def retrieve_all_documents(ctx: RunContext[AgenticRAGDeps]) -> List[Document]:
    """
    Retrieve all documents from the Supabase database.
    
    Args:
        ctx: The context including the Supabase client
        
    Returns:
        A list of Document objects containing document_id, title, and summary for all documents
        
    Raises:
        Exception: Logs error if database query fails and return an empty list
    """

    try:
        documents_result = ctx.deps.supabase_client.from_('md_documents').select('document_id, title, summary').execute()
        print(f"Raw response from Supabase: {documents_result}")

        if not documents_result.data:
            return []  # No documents found

        documents = [
            Document(id=doc["document_id"], title=doc["title"], summary=doc["summary"])
            for doc in documents_result.data
        ]

        return documents
        
    except Exception as e:
        print(f"Error retrieving documentation: {e}")
        return []

def main():
    dependencies = AgenticRAGDeps(
        supabase_client= supabase,
    )

    result = document_selector_agent.run_sync(
        "What are the Technologies currently in use by procurement operations?",
        deps= dependencies
    )
    print(f"Full LLM Response: {result.all_messages}")
    print(f"Selected Document IDs: {result.data.ids if result.data else 'No data received'}")

if __name__ == "__main__":
    main()
