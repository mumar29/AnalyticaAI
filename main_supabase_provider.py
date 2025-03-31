import os
from supabase import create_client, Client

class MainSupabaseProvider:
    """A singleton class to manage Supabase client reinitialization when credentials change."""
    _client: Client = None

    @classmethod
    def get_client(cls):
        if cls._client is None:
            supabase_url = os.getenv("SUPABASE_URL")
            supabase_key = os.getenv("SUPABASE_KEY")
            if not supabase_url or not supabase_key:
                raise ValueError("Missing Supabase credentials. Ensure SUPABASE_URL and SUPABASE_KEY are set.")
            cls._client = create_client(supabase_url, supabase_key)
        return cls._client

    @classmethod
    def reset_client(cls):
        """Reset the client so that it gets reinitialized with new credentials."""
        cls._client = None
