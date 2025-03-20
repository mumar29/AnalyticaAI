-- Drop the ProductCategories table first (many-to-many relationship)
DROP TABLE IF EXISTS ProductCategories CASCADE;

-- Drop other dependent tables
DROP TABLE IF EXISTS OrderItems CASCADE;
DROP TABLE IF EXISTS Orders CASCADE;

-- Drop main tables
DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Products CASCADE;
DROP TABLE IF EXISTS Categories CASCADE;

-- Drop the table_categories table (not dependent on others)
DROP TABLE IF EXISTS table_categories CASCADE;
