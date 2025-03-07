-- Revoke privileges from roles
REVOKE SELECT ON ALL TABLES IN SCHEMA public FROM admin;
REVOKE SELECT ON Orders, OrderItems, Products, Categories, Users, ProductCategories FROM manager;
REVOKE SELECT ON Products, Categories FROM customer;

-- Drop roles
DROP ROLE admin;
DROP ROLE manager;
DROP ROLE customer;
