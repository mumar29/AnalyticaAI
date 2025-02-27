CREATE OR REPLACE FUNCTION execute_sql(query TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    result JSONB;
BEGIN
    -- Execute the query dynamically and store the result in JSON format
    EXECUTE format('SELECT json_agg(t) FROM (%s) AS t', query) INTO result;
    RETURN result;
END;
$$;
