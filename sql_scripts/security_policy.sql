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
