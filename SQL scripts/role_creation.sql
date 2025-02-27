CREATE ROLE manager;
CREATE ROLE customer;

GRANT SELECT ON ALL TABLES IN SCHEMA public TO manager;
GRANT SELECT ON Products, Categories TO customer;

SELECT 
    grantee, 
    table_name, 
    privilege_type
FROM information_schema.role_table_grants
WHERE table_schema = 'public';
