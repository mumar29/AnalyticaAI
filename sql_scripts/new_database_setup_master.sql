-- Enable the pgvector extension
CREATE extension IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS organizations (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    organization_id BIGINT REFERENCES organizations(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    hashed_password TEXT NOT NULL,
    role varchar CHECK (role IN ('admin', 'member')) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS conversations (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
    summary TEXT,
    total_messages INTEGER DEFAULT 0,
    last_summarized_message_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS messages (
    id bigserial primary key,
    conversation_id bigint references conversations(id) ON DELETE CASCADE,
    role varchar CHECK (role IN ('USER', 'AI')) NOT NULL, -- User or AI
    text_content text, -- Stores simple string messages
    json_content jsonb,
    created_at timestamp default now()
);

CREATE TABLE IF NOT EXISTS api_keys (
    id bigserial PRIMARY KEY,
    organization_id BIGINT UNIQUE REFERENCES organizations(id) ON DELETE CASCADE,
    provider text NOT NULL,
    api_key text NOT NULL,
    created_at timestamp default now()
);

-- Documents table
CREATE TABLE IF NOT EXISTS md_documents (
    document_id BIGSERIAL PRIMARY KEY,
    organization_id BIGINT REFERENCES organizations(id) ON DELETE CASCADE,
    path VARCHAR NOT NULL UNIQUE,  -- Unique path constraint
    source_type VARCHAR NOT NULL,
    title VARCHAR,
    summary VARCHAR,
    keywords VARCHAR[],
    embedding VECTOR(1024),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Chunks table
CREATE TABLE IF NOT EXISTS md_chunks (
    chunk_id BIGSERIAL PRIMARY KEY,
    document_id BIGINT REFERENCES md_documents(document_id) ON DELETE CASCADE,
    chunk_number INTEGER NOT NULL,
    title VARCHAR NOT NULL,
    summary VARCHAR NOT NULL,
    keywords VARCHAR[] NOT NULL,
    content TEXT NOT NULL,
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    embedding VECTOR(1024),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    UNIQUE(document_id, chunk_number)
);

-- Improved chunk tables relationship
CREATE TABLE IF NOT EXISTS md_tables (
    id BIGSERIAL PRIMARY KEY,
    chunk_id BIGINT REFERENCES md_chunks(chunk_id) ON DELETE CASCADE,
    document_id BIGINT REFERENCES md_documents(document_id) ON DELETE CASCADE,
    table_hash VARCHAR NOT NULL,
    column_names VARCHAR[] NOT NULL,
    num_rows INTEGER NOT NULL,
    csv_data TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    UNIQUE(table_hash, chunk_id)
);

CREATE TABLE IF NOT EXISTS database_credentials (
    id BIGSERIAL PRIMARY KEY,
    organization_id BIGINT UNIQUE REFERENCES organizations(id) ON DELETE CASCADE,
    database_type TEXT NOT NULL CHECK (database_type IN ('postgresql', 'mysql', 'sqlserver', 'supabase')),
    host TEXT,
    port INTEGER,
    dbname TEXT,
    username TEXT,
    password TEXT, -- Consider encrypting this before storing
    ssl BOOLEAN DEFAULT TRUE,
    supabase_url TEXT,
    supabase_key TEXT,
    driver TEXT,
    created_at TIMESTAMP DEFAULT now()
);

CREATE OR REPLACE FUNCTION update_total_messages()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE conversations
  SET total_messages = total_messages + 1
  WHERE id = NEW.conversation_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Helper function to create organization admins
CREATE OR REPLACE FUNCTION create_organization_admin(
    org_name TEXT,
    admin_email TEXT,
    hashed_pw TEXT
) RETURNS BIGINT AS $$
DECLARE
    org_id BIGINT;
BEGIN
    -- Create organization
    INSERT INTO organizations(name) VALUES (org_name)
    RETURNING id INTO org_id;

    -- Create admin user
    INSERT INTO users(email, hashed_password, organization_id, role)
    VALUES (admin_email, hashed_pw, org_id, 'admin');

    RETURN org_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_conversation_messages_for_user(
    p_user_id BIGINT,
    p_conversation_id BIGINT,
    p_history_limit INTEGER
)
RETURNS JSON AS $$
DECLARE
    conv RECORD;
    messages JSON;
BEGIN
    -- Retrieve the conversation by its ID.
    SELECT * INTO conv
    FROM conversations
    WHERE id = p_conversation_id;

    -- If the conversation doesn't exist or belongs to another user, return NULL.
    IF NOT FOUND OR conv.user_id <> p_user_id THEN
        RETURN NULL;
    END IF;

    -- Retrieve the conversation messages, ordered by creation date (newest first).
    SELECT COALESCE(json_agg(sub), '[]'::json)
    INTO messages
    FROM (
        SELECT m.*
        FROM messages m
        WHERE m.conversation_id = conv.id
        ORDER BY m.created_at DESC
        LIMIT p_history_limit
    ) sub;

    RETURN messages;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_or_create_conversation_session_and_history(
    p_user_id BIGINT,
    p_conversation_id BIGINT,
    p_history_limit INTEGER
)
RETURNS TABLE(
    conversation_id BIGINT,
    summary TEXT,
    messages JSON
) AS $$
DECLARE
    conv RECORD;
    msgs JSON;
BEGIN
    -- Case 1: Conversation ID provided
    IF p_conversation_id IS NOT NULL THEN
        SELECT * INTO conv 
        FROM conversations 
        WHERE id = p_conversation_id;

        -- If conversation exists but belongs to a different user, return nothing
        IF FOUND AND conv.user_id <> p_user_id THEN
            RETURN;
        END IF;

        -- If conversation exists and belongs to the user, call the new function for messages
        IF FOUND THEN
            msgs := get_conversation_messages_for_user(p_user_id, conv.id, p_history_limit);
            RETURN QUERY
            SELECT 
                conv.id AS conversation_id,
                conv.summary,
                msgs AS messages;
            RETURN;
        END IF;
    END IF;
    
    -- Case 2: No valid conversation found (either ID was not provided or did not exist)
    INSERT INTO conversations(user_id) 
    VALUES (p_user_id) 
    RETURNING * INTO conv;
    
    RETURN QUERY
    SELECT 
        conv.id AS conversation_id,
        conv.summary,
        '[]'::json AS messages;
END;
$$ LANGUAGE plpgsql;

-- Create a function to search for documents
CREATE OR REPLACE FUNCTION match_md_documents (
  query_embedding vector(1024),
  match_count int DEFAULT 5
) RETURNS TABLE (
  document_id bigint,
  path varchar,
  title varchar,
  summary varchar,
  similarity float
) LANGUAGE plpgsql AS $$
BEGIN
  RETURN QUERY
  SELECT
    d.document_id,
    d.path,
    d.title,
    d.summary,
    1 - (d.embedding <=> query_embedding) AS similarity
  FROM md_documents d
  ORDER BY d.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Create a function to search for documentation chunks
CREATE OR REPLACE FUNCTION match_md_chunks (
  query_embedding vector(1024),
  match_count int DEFAULT 10,
  filter jsonb DEFAULT '{}',
  p_document_ids bigint[] DEFAULT NULL  -- Array of document IDs
) RETURNS TABLE (
  chunk_id bigint,
  document_id bigint,
  chunk_number integer,
  title varchar,
  summary varchar,
  keywords varchar[],
  content text,
  metadata jsonb,
  similarity float
) LANGUAGE plpgsql AS $$
BEGIN
  RETURN QUERY
  SELECT
    c.chunk_id,
    c.document_id,
    c.chunk_number,
    c.title,
    c.summary,
    c.keywords,
    c.content,
    c.metadata,
    1 - (c.embedding <=> query_embedding) AS similarity
  FROM md_chunks c
  WHERE c.metadata @> filter
    AND (p_document_ids IS NULL OR c.document_id = ANY(p_document_ids))  -- Updated filter for multiple IDs
  ORDER BY c.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

CREATE OR REPLACE FUNCTION execute_sql(query TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    clean_query TEXT;
    result JSONB;
BEGIN
    clean_query := rtrim(query, ';');
    
    -- Execute the query dynamically and store the result in JSON format 
    EXECUTE format('SELECT json_agg(t) FROM (%s) AS t', clean_query) INTO result; 

    RETURN result;
END;
$$;

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM pg_trigger 
        WHERE tgname = 'trigger_update_total_messages'
    ) THEN
        CREATE TRIGGER trigger_update_total_messages
        AFTER INSERT ON messages
        FOR EACH ROW
        EXECUTE FUNCTION update_total_messages();
    END IF;
END $$;

-- Use HNSW for better performance (requires pgvector 0.5+)
CREATE index IF NOT EXISTS md_documents_embedding_idx ON md_documents USING hnsw (embedding vector_cosine_ops) WITH (m = 16, ef_construction = 64);

CREATE index IF NOT EXISTS md_chunks_embedding_idx ON md_chunks USING hnsw (embedding vector_cosine_ops) WITH (m = 16, ef_construction = 64);

create index IF NOT EXISTS idx_md_chunks_metadata on md_chunks using gin (metadata);

CREATE INDEX IF NOT EXISTS idx_md_tables_composite ON md_tables(document_id, chunk_id, table_hash);

CREATE INDEX  IF NOT EXISTS idx_messages_conversation_created_at ON messages (conversation_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_conversations_id_user ON conversations (id, user_id);