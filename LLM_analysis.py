from typing import List
from keybert import KeyBERT
import numpy as np
from sentence_transformers import SentenceTransformer
from pydantic import BaseModel
import torch
torch.classes.__path__ = []

embeding_model = SentenceTransformer("Snowflake/snowflake-arctic-embed-l-v2.0")

kw_model = KeyBERT()

class Document(BaseModel):
    title: str
    summary: str

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