-- Drop existing tables in reverse dependency order
DROP TABLE IF EXISTS ProductReviews;
DROP TABLE IF EXISTS SupportTickets;
DROP TABLE IF EXISTS InventoryLogs;
DROP TABLE IF EXISTS UserActivity;
DROP TABLE IF EXISTS ProductCategories;
DROP TABLE IF EXISTS OrderItems;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Campaigns;
DROP TABLE IF EXISTS Categories;
DROP TABLE IF EXISTS Products;
DROP TABLE IF EXISTS Users;

-----------------------------------------------------
-- Create Users table with extended user details
-----------------------------------------------------
CREATE TABLE Users (
    user_id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    address TEXT,
    age INT,
    gender VARCHAR(20),
    city VARCHAR(50),
    state VARCHAR(50),
    country VARCHAR(50),
    loyalty_points INT DEFAULT 0,
    referral_code VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    last_purchase TIMESTAMP
);

-----------------------------------------------------
-- Create Products table with extended product details
-----------------------------------------------------
CREATE TABLE Products (
    product_id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL DEFAULT 0,
    sku VARCHAR(50),
    brand VARCHAR(100),
    supplier VARCHAR(100),
    dimensions VARCHAR(100),
    weight DECIMAL(10,2),
    average_rating DECIMAL(3,2) DEFAULT 0,
    review_count INT DEFAULT 0,
    on_sale BOOLEAN DEFAULT false,
    discontinued_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-----------------------------------------------------
-- Create Categories table for product categorization
-----------------------------------------------------
CREATE TABLE Categories (
    category_id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-----------------------------------------------------
-- Create Campaigns table for marketing and sales campaigns
-----------------------------------------------------
CREATE TABLE Campaigns (
    campaign_id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100),
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    budget DECIMAL(10,2)
);

-----------------------------------------------------
-- Create Orders table with extended order details
-----------------------------------------------------
CREATE TABLE Orders (
    order_id BIGSERIAL PRIMARY KEY,
    user_id BIGINT,
    total_price DECIMAL(10,2) NOT NULL,
    order_status VARCHAR(20) NOT NULL CHECK (order_status IN ('Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned')),
    shipping_address TEXT,
    payment_method VARCHAR(50),
    order_source VARCHAR(50),
    discount_code VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    shipped_date TIMESTAMP,
    delivered_date TIMESTAMP,
    return_reason TEXT,
    campaign_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (campaign_id) REFERENCES Campaigns(campaign_id)
);

-----------------------------------------------------
-- Create OrderItems table with extended details per item
-----------------------------------------------------
CREATE TABLE OrderItems (
    order_item_id BIGSERIAL PRIMARY KEY,
    order_id BIGINT,
    product_id BIGINT,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    cost_price DECIMAL(10,2),
    discount_applied DECIMAL(10,2),
    tax DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

-----------------------------------------------------
-- Create ProductCategories table for many-to-many relationship
-----------------------------------------------------
CREATE TABLE ProductCategories (
    product_id BIGINT,
    category_id BIGINT,
    PRIMARY KEY (product_id, category_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

-----------------------------------------------------
-- Create ProductReviews table to capture detailed reviews
-----------------------------------------------------
CREATE TABLE ProductReviews (
    review_id BIGSERIAL PRIMARY KEY,
    product_id BIGINT,
    user_id BIGINT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    review TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES Products(product_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-----------------------------------------------------
-- Create SupportTickets table to track customer support interactions
-----------------------------------------------------
CREATE TABLE SupportTickets (
    ticket_id BIGSERIAL PRIMARY KEY,
    user_id BIGINT,
    order_id BIGINT,
    issue_description TEXT,
    status VARCHAR(20) CHECK (status IN ('Open', 'In Progress', 'Resolved', 'Closed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

-----------------------------------------------------
-- Create InventoryLogs table for detailed inventory tracking
-----------------------------------------------------
CREATE TABLE InventoryLogs (
    log_id BIGSERIAL PRIMARY KEY,
    product_id BIGINT,
    change INT,
    log_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reason VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

-----------------------------------------------------
-- Create UserActivity table to capture website/app interactions
-----------------------------------------------------
CREATE TABLE UserActivity (
    activity_id BIGSERIAL PRIMARY KEY,
    user_id BIGINT,
    activity_type VARCHAR(50),  -- e.g., 'Page View', 'Search', 'Click'
    activity_detail TEXT,
    activity_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
