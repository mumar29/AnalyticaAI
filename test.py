import asyncio
from supabase_database import retrieve_chunks_tables


async def main():
    chunk_ids_list = [1, 4, 5]  # Example chunk_id list
    records = await retrieve_chunks_tables(chunk_ids_list)
    print(records)

# Run the async main function
asyncio.run(main())
