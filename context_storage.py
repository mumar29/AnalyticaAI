import json
from fastapi import HTTPException
import hashlib

context_cache = {}

async def get_context_from_hash(context_hash: str):
    if context_hash not in context_cache:
        raise HTTPException(status_code=404, detail="Context expired or invalid")
    return context_cache[context_hash]

def cache_context(context_data: dict) -> str:
    context_hash = hashlib.sha256(json.dumps(context_data).encode()).hexdigest()
    context_cache[context_hash] = context_data
    return context_hash