from redis import Redis
from functools import lru_cache

@lru_cache(maxsize=1)  # Ensures only one instance
def get_redis_client():
    client = Redis(
        host='redis-12766.c265.us-east-1-2.ec2.redns.redis-cloud.com',
        port=12766,
        password="hclwOsTBUQOAuXmUgIytI6ALgV0b3lUV"
    )
    try:
        client.ping()
        print("Connected to Redis successfully!")  # This will only log once
    except Exception as e:
        print(f"Failed to connect to Redis: {e}")

    return client 
