-- Enable the pgvector extension
create extension if not exists vector;

-- Documents table
CREATE TABLE md_documents (
    document_id BIGSERIAL PRIMARY KEY,
    path VARCHAR NOT NULL UNIQUE,  -- Unique path constraint
    source_type VARCHAR NOT NULL,
    title VARCHAR,
    summary VARCHAR,
    keywords VARCHAR[],
    embedding VECTOR(1024),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Chunks table
CREATE TABLE md_chunks (
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
CREATE TABLE md_tables (
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

-- Use HNSW for better performance (requires pgvector 0.5+)
CREATE index ON md_documents USING hnsw (embedding vector_cosine_ops) WITH (m = 16, ef_construction = 64);

CREATE index ON md_chunks USING hnsw (embedding vector_cosine_ops) WITH (m = 16, ef_construction = 64);

-- Create an index on metadata for faster filtering
create index idx_md_chunks_metadata on md_chunks using gin (metadata);

-- Indexes for faster queries
CREATE INDEX idx_md_tables_composite ON md_tables(document_id, chunk_id, table_hash);

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
  p_document_ids bigint[] DEFAULT NULL  -- Change to an array of document IDs
) RETURNS TABLE (
  chunk_id bigint,
  document_id bigint,
  chunk_number integer,
  title varchar,
  summary varchar,
  keywords varchar[],
  content text,
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
    1 - (c.embedding <=> query_embedding) AS similarity
  FROM md_chunks c
  WHERE c.metadata @> filter
    AND (p_document_ids IS NULL OR c.document_id = ANY(p_document_ids))  -- Updated filter for multiple IDs
  ORDER BY c.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;


-- Everything above will work for any PostgreSQL database. The below commands are for Supabase security

-- Enable RLS on the table
alter table md_documents enable row level security;

-- Create a policy that allows anyone to read
create policy "Allow public read access"
  on md_documents
  for select
  to public
  using (true);

-- Allow public users to insert into md_documents
CREATE POLICY "Allow public insert"
  ON md_documents
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow public users to update md_documents
CREATE POLICY "Allow public update"
  ON md_documents
  FOR UPDATE
  TO public
  USING (true);

-- Enable RLS on the table
alter table md_chunks enable row level security;

-- Create a policy that allows anyone to read
create policy "Allow public read access"
  on md_chunks
  for select
  to public
  using (true);

-- Allow public users to insert into md_chunks
CREATE POLICY "Allow public insert"
  ON md_chunks
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Enable RLS on the md_tables table
ALTER TABLE md_tables ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read
CREATE POLICY "Allow public read access"
  ON md_tables
  FOR SELECT
  TO public
  USING (true);

-- Allow public users to insert into md_tables
CREATE POLICY "Allow public insert"
  ON md_tables
  FOR INSERT
  TO public
  WITH CHECK (true);
