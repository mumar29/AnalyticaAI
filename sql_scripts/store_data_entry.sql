-- Insert Users
INSERT INTO Users (name, email, password, address) VALUES
('John Doe', 'johndoe@example.com', 'hashed_password_1', '1234 Elm Street, New York, NY'),
('Jane Smith', 'janesmith@example.com', 'hashed_password_2', '5678 Oak Avenue, Los Angeles, CA'),
('Alice Johnson', 'alicej@example.com', 'hashed_password_3', '789 Pine Road, Chicago, IL'),
('Bob Williams', 'bobw@example.com', 'hashed_password_4', '246 Maple Blvd, Houston, TX'),
('Emily Davis', 'emilyd@example.com', 'hashed_password_5', '1357 Birch Lane, Seattle, WA'),
('Michael Brown', 'michaelb@example.com', 'hashed_password_6', '8642 Cedar Street, Denver, CO'),
('Sarah Wilson', 'sarahw@example.com', 'hashed_password_7', '9526 Redwood Drive, Boston, MA');

-- Insert Categories
INSERT INTO Categories (name) VALUES
('Electronics'),
('Books'),
('Home & Kitchen'),
('Fashion'),
('Toys & Games'),
('Fitness'),
('Beauty & Personal Care');

-- Insert Products
INSERT INTO Products (name, description, price, stock_quantity) VALUES
('Apple iPhone 14', 'Latest Apple iPhone with A15 Bionic chip', 799.99, 50),
('Samsung Galaxy S23', 'Flagship Samsung phone with 120Hz display', 699.99, 30),
('Echo Dot (4th Gen)', 'Smart speaker with Alexa', 49.99, 100),
('Air Fryer', 'Healthy oil-free cooking appliance', 129.99, 40),
('The Lean Startup', 'Book by Eric Ries on startup success', 19.99, 80),
('Nike Running Shoes', 'Comfortable sports shoes', 89.99, 60),
('LEGO Star Wars Set', 'Collector''s edition Star Wars LEGO set', 159.99, 20),
('Sony WH-1000XM5', 'Wireless Noise Cancelling Headphones', 349.99, 25),
('Dell XPS 15', 'High-performance laptop for professionals', 1499.99, 15),
('Instant Pot', 'Multi-functional electric pressure cooker', 99.99, 50),
('Adidas Hoodie', 'Warm and stylish hoodie for casual wear', 59.99, 75),
('Makeup Brush Set', 'Complete set for professional makeup application', 29.99, 40),
('Treadmill Pro', 'Professional treadmill for home workouts', 999.99, 10);

-- Insert ProductCategories (mapping products to categories)
INSERT INTO ProductCategories (product_id, category_id) VALUES
(1, 1),  -- iPhone -> Electronics
(2, 1),  -- Galaxy S23 -> Electronics
(3, 1),  -- Echo Dot -> Electronics
(4, 3),  -- Air Fryer -> Home & Kitchen
(5, 2),  -- The Lean Startup -> Books
(6, 4),  -- Nike Running Shoes -> Fashion
(7, 5),  -- LEGO Set -> Toys & Games
(8, 1),  -- Sony Headphones -> Electronics
(9, 1),  -- Dell Laptop -> Electronics
(10, 3), -- Instant Pot -> Home & Kitchen
(11, 4), -- Adidas Hoodie -> Fashion
(12, 7), -- Makeup Brush Set -> Beauty & Personal Care
(13, 6); -- Treadmill Pro -> Fitness

-- Insert Orders
INSERT INTO Orders (user_id, total_price, order_status) VALUES
(1, 849.98, 'Pending'),
(2, 49.99, 'Shipped'),
(3, 219.98, 'Delivered'),
(4, 89.99, 'Cancelled'),
(5, 129.99, 'Shipped'),
(6, 399.98, 'Pending'),
(7, 1999.98, 'Delivered'),
(1, 349.99, 'Shipped'),
(2, 999.99, 'Pending'),
(3, 79.98, 'Cancelled');

-- Insert OrderItems (linking orders to products)
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES
(1, 1, 1, 799.99),   -- iPhone purchase
(1, 3, 1, 49.99),    -- Echo Dot purchase
(2, 3, 1, 49.99),    -- Echo Dot purchase
(3, 4, 1, 129.99),   -- Air Fryer purchase
(3, 5, 1, 19.99),    -- The Lean Startup purchase
(4, 6, 1, 89.99),    -- Nike Running Shoes (cancelled)
(5, 10, 1, 129.99),  -- Instant Pot purchase
(6, 8, 1, 349.99),   -- Sony Headphones purchase
(6, 7, 1, 159.99),   -- LEGO Star Wars purchase
(7, 9, 1, 1499.99),  -- Dell Laptop purchase
(7, 13, 1, 499.99),  -- Treadmill purchase
(8, 8, 1, 349.99),   -- Sony Headphones purchase
(9, 13, 1, 999.99),  -- Treadmill purchase
(10, 11, 1, 59.99),  -- Adidas Hoodie (cancelled)
(10, 12, 1, 19.99);  -- Makeup Brush Set (cancelled)