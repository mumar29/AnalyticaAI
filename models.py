from dataclasses import dataclass
from typing import Any, Dict, List

@dataclass
class ProcessedDocument:
    path: str
    source_type: str
    title: str
    summary: str
    keywords: List[str]
    embedding: List[float]

@dataclass
class ProcessedChunk:
    document_id: int
    chunk_number: int
    title: str
    summary: str
    keywords: List[str]
    content: str
    metadata: Dict[str, Any]
    embedding: List[float]
    tables: List[Dict[str, Any]]