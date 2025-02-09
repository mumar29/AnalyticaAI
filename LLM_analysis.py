import json
from typing import Dict, List
from groq import Groq
from keybert import KeyBERT
import numpy as np
from sentence_transformers import SentenceTransformer
import torch

embeding_model = SentenceTransformer("Snowflake/snowflake-arctic-embed-l-v2.0")

groq_client = Groq(
    api_key="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"
)

kw_model = KeyBERT()

def get_title_and_summary(chunk: str) -> Dict[str, str]:
    system_prompt = """You are an expert technical documentation analyst. Extract titles and summaries from documentation chunks following these rules:

        1. Title Rules:
        - If the chunk starts with a main heading (e.g., "# Getting Started"), use that exact heading
        - For middle chunks without headings, create a 3-5 word title like "Configuring Expo Router" or "Debugging Tips"
        - Never use markdown formatting in titles
        - Prioritize technical terms (e.g., "EAS Builds" over "Building Apps")

        2. Summary Rules:
        - 1-2 sentences maximum
        - Include key technical terms and concepts
        - Mention specific tools/commands (e.g., `npx create-expo-app`)
        - Preserve important numbers/version info
        - Never include markdown

        Return JSON format: {"title": "...", "summary": "..."}

        Example input:
        ## Development Builds
        Create native binaries using `eas build`. Configure with eas.json.

        Example output:
        {"title": "Development Builds", "summary": "Create native binaries using eas build command and configure builds through eas.json configuration file."}"""
    
    try:
        response = groq_client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": f"Content:\n{chunk}"}
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