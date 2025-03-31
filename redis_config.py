import os
from redis import Redis
from functools import lru_cache

@lru_cache(maxsize=1)  # Ensures only one instance
def get_redis_client():
    
    host = os.getenv("REDIS_HOST")
    port = int(os.getenv("REDIS_PORT"))
    password = os.getenv("REDIS_PASSWORD") if os.getenv("REDIS_PASSWORD") != "None" else None

    # Create Redis client using the loaded configuration
    client = Redis(
        host=host,
        port=port,
        password=password
    )
    
    try:
        client.ping()
        print("Connected to Redis successfully!")  # This will only log once
    except Exception as e:
        print(f"Failed to connect to Redis: {e}")

    return client 
