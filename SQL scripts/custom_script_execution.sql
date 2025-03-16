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