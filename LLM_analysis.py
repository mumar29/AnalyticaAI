import json
from typing import Dict, List
from groq import Groq
from keybert import KeyBERT
import numpy as np
from sentence_transformers import SentenceTransformer
from pydantic import BaseModel
import torch

from agent_functions import CSVHeaderCorrection
torch.classes.__path__ = []

embeding_model = SentenceTransformer("Snowflake/snowflake-arctic-embed-l-v2.0")

groq_client = Groq(
    api_key="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"
    # api_key="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"
)

kw_model = KeyBERT()

class Document(BaseModel):
    title: str
    summary: str

def get_title_and_summary(chunk: str, summary_range: str = "1-2") -> Dict[str, str]:
    system_prompt = f"""You are an expert documentation analyst capable of handling diverse inputs—plain text or markdown, full documents or chunks, technical or business content. Extract a concise title and a brief summary using these rules:
        Title:
        - If a main heading is present (e.g., "# Getting Started"), use it exactly.
        - Otherwise, generate a 3-5 word title without markdown formatting.
        - Prioritize technical terms when relevant.

        Summary:
        - Provide {summary_range} clear sentences capturing key points, technical terms, and important details.
        - Avoid markdown formatting.

        The JSON object must use the following schema:
        {json.dumps(Document.model_json_schema(), indent=2)}
"""
 
    try:
        response = groq_client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": chunk}
            ],
            response_format={ "type": "json_object" },
            model="llama-3.3-70b-versatile"
        )
        return json.loads(response.choices[0].message.content)
    except Exception as e:
        print(f"Error getting title and summary: {e}")
        return {"title": "Error processing title", "summary": "Error processing summary"}
    

def get_keywords(chunk: str, top_n: int = 5) -> List[str]:
    keywords = kw_model.extract_keywords(chunk, keyphrase_ngram_range=(1, 2), top_n=top_n)
    return [kw[0] for kw in keywords]

def get_embedding(text: str) -> List[float]:
    embeddings = embeding_model.encode(text)

    if isinstance(embeddings, np.ndarray):
        embeddings = embeddings.tolist()
    elif isinstance(embeddings, torch.Tensor):
        embeddings = embeddings.cpu().numpy().tolist()
    else:
        raise TypeError(f"Unexpected embedding type: {type(embeddings)}")

    return embeddings

def infer_missing_headers(csv: str, max_columns: int) -> CSVHeaderCorrection:
    system_prompt = f"""
        You are an expert in CSV data correction. The given CSV has a **header mismatch**: 
        - The header row has **fewer columns** than the data rows. 
        - Your task is to generate a revised **header row** that properly aligns with the data.
        - **Do NOT** add extra columns beyond the detected number.

        The number of column names you generate **must be exactly** {max_columns}.

        
        The JSON object must use the following schema:
        {json.dumps(CSVHeaderCorrection.model_json_schema(), indent=2)}
    """

    try:
        csv_json = json.dumps(csv , indent=2)

        response = groq_client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": csv_json}
            ],
            response_format={ "type": "json_object" },
            model="llama-3.3-70b-versatile"
        )
        
        return CSVHeaderCorrection.model_validate_json(response.choices[0].message.content)
        
    except Exception as e:
        print(f"Error inferring missing headers: {e}")
        return {
            "error": "Failed to infer missing headers.",
            "details": str(e)
        }