-- Enable the pgvector extension
create extension if not exists vector;

-- Create the documentation chunks table
create table md_chunks (
    id bigserial primary key,
    path varchar not null,
    chunk_number integer not null,
    title varchar not null,
    summary varchar not null,
    keywords varchar[] not null,
    content text not null,  -- Added content column
    metadata jsonb not null default '{}'::jsonb,  -- Added metadata column
    embedding vector(1024),  -- embeddings are 1024 dimensions
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    
    -- Add a unique constraint to prevent duplicate chunks for the same URL
    unique(path, chunk_number)
);

-- Create an index for better vector similarity search performance
create index on md_chunks using ivfflat (embedding vector_cosine_ops);

-- Create an index on metadata for faster filtering
create index idx_md_chunks_metadata on md_chunks using gin (metadata);

-- Create the table to store extracted tables from documentation chunks
CREATE TABLE chunk_tables (
    id bigserial PRIMARY KEY,
    table_hash VARCHAR NOT NULL,  -- Unique identifier for the table (hash of CSV data)
    chunk_number INTEGER NOT NULL,  -- Corresponding chunk number
    column_names VARCHAR[] NOT NULL,  -- Column names extracted from the table
    num_rows INTEGER NOT NULL,  -- Number of rows in the table
    csv_data TEXT NOT NULL,  -- Table data stored as CSV format
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    -- Ensure uniqueness for tables within the same chunk
    UNIQUE (table_hash, chunk_number)
);

-- Indexes for faster queries
CREATE INDEX idx_page_tables_table_hash ON chunk_tables(table_hash);

-- Create a function to search for documentation chunks
create function match_md_chunks (
  query_embedding vector(1024),
  match_count int default 10,
  filter jsonb DEFAULT '{}'::jsonb
) returns table (
  id bigint,
  url varchar,
  chunk_number integer,
  title varchar,
  summary varchar,
  keywords varchar[],
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
#variable_conflict use_column
begin
  return query
  select
    id,
    url,
    chunk_number,
    title,
    summary,
    keywords,
    content,
    metadata,
    1 - (md_chunks.embedding <=> query_embedding) as similarity
  from md_chunks
  where metadata @> filter
  order by md_chunks.embedding <=> query_embedding
  limit match_count;
end;
$$;

-- Everything above will work for any PostgreSQL database. The below commands are for Supabase security

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

-- Enable RLS on the chunk_tables table
ALTER TABLE chunk_tables ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read
CREATE POLICY "Allow public read access"
  ON chunk_tables
  FOR SELECT
  TO public
  USING (true);

-- Allow public users to insert into chunk_tables
CREATE POLICY "Allow public insert"
  ON chunk_tables
  FOR INSERT
  TO public
  WITH CHECK (true);
