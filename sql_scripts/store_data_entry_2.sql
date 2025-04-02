-- Insert Users
INSERT INTO Users (name, email, password, address) VALUES
('Alex Rivera', 'alexr@example.com', 'hashed_password_1', '742 Evergreen Terrace, Springfield, IL'),
('Taylor Johnson', 'taylorj@example.com', 'hashed_password_2', '123 Main Street, Austin, TX'),
('Morgan Lee', 'morganl@example.com', 'hashed_password_3', '555 Ocean Avenue, Miami, FL'),
('Jordan Casey', 'jordanc@example.com', 'hashed_password_4', '890 Mountain View, Denver, CO'),
('Quinn Thompson', 'quinnt@example.com', 'hashed_password_5', '456 Lake Drive, Chicago, IL'),
('Riley Martin', 'rileym@example.com', 'hashed_password_6', '777 Sunset Blvd, Los Angeles, CA'),
('Cameron Wright', 'cameronw@example.com', 'hashed_password_7', '112 Broadway, New York, NY'),
('Dakota Patel', 'dakotap@example.com', 'hashed_password_8', '223 Cherry Lane, Portland, OR');

-- Insert Categories
INSERT INTO Categories (name) VALUES
('Smart Home'),
('Outdoor & Adventure'),
('Gaming'),
('Kitchen Appliances'),
('Health & Wellness'),
('Office Supplies'),
('Pet Products'),
('Audio & Music'),
('Sustainable Living');

-- Insert Products
INSERT INTO Products (name, description, price, stock_quantity) VALUES
('Google Nest Hub', 'Smart display with Google Assistant built-in', 89.99, 45),
('Portable Solar Charger', 'Eco-friendly power for outdoor adventures', 59.99, 30),
('PlayStation 5', 'Next-gen gaming console with ultra-high speed SSD', 499.99, 15),
('Espresso Machine', 'Professional-grade coffee maker for home use', 299.99, 25),
('Fitness Tracker Watch', 'Tracks steps, heart rate and sleep quality', 79.99, 60),
('Adjustable Standing Desk', 'Ergonomic desk with multiple height settings', 249.99, 20),
('Automatic Pet Feeder', 'Smart device for scheduled pet feeding', 69.99, 40),
('Bluetooth Turntable', 'Classic vinyl player with modern connectivity', 149.99, 35),
('Nintendo Switch OLED', 'Enhanced portable gaming system', 349.99, 22),
('Smart Herb Garden', 'Indoor garden with automatic lighting and watering', 99.99, 18),
('Ultra HD Webcam', 'Crystal clear video for meetings and streaming', 129.99, 50),
('Reusable Silicone Food Bags', 'Eco-friendly alternative to plastic bags', 19.99, 100),
('Electric Skateboard', 'Battery-powered board with wireless remote', 399.99, 12),
('Smart Water Bottle', 'Tracks hydration and glows to remind you to drink', 44.99, 65),
('Gaming Laptop', 'High-performance laptop with RTX graphics', 1299.99, 10),
('Massage Gun', 'Percussion therapy device for muscle recovery', 159.99, 30);

-- Insert ProductCategories (mapping products to categories)
INSERT INTO ProductCategories (product_id, category_id) VALUES
(1, 1),  -- Google Nest Hub -> Smart Home
(2, 2),  -- Portable Solar Charger -> Outdoor & Adventure
(2, 9),  -- Portable Solar Charger -> Sustainable Living
(3, 3),  -- PlayStation 5 -> Gaming
(4, 4),  -- Espresso Machine -> Kitchen Appliances
(5, 5),  -- Fitness Tracker -> Health & Wellness
(6, 6),  -- Standing Desk -> Office Supplies
(7, 7),  -- Pet Feeder -> Pet Products
(7, 1),  -- Pet Feeder -> Smart Home
(8, 8),  -- Bluetooth Turntable -> Audio & Music
(9, 3),  -- Nintendo Switch -> Gaming
(10, 9), -- Smart Herb Garden -> Sustainable Living
(10, 1), -- Smart Herb Garden -> Smart Home
(11, 6), -- Ultra HD Webcam -> Office Supplies
(12, 9), -- Silicone Food Bags -> Sustainable Living
(13, 2), -- Electric Skateboard -> Outdoor & Adventure
(14, 5), -- Smart Water Bottle -> Health & Wellness
(15, 3), -- Gaming Laptop -> Gaming
(16, 5); -- Massage Gun -> Health & Wellness

-- Insert Orders
INSERT INTO Orders (user_id, total_price, order_status) VALUES
(1, 589.98, 'Pending'),
(2, 299.99, 'Shipped'),
(3, 499.99, 'Delivered'),
(4, 229.98, 'Pending'),
(5, 1299.99, 'Shipped'),
(6, 399.99, 'Delivered'),
(7, 379.98, 'Cancelled'),
(8, 149.99, 'Shipped'),
(1, 249.99, 'Delivered'),
(2, 159.99, 'Pending'),
(3, 89.99, 'Shipped'),
(4, 349.99, 'Delivered');

-- Insert OrderItems (linking orders to products)
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES
(1, 3, 1, 499.99),   -- PlayStation 5
(1, 5, 1, 89.99),    -- Fitness Tracker
(2, 4, 1, 299.99),   -- Espresso Machine
(3, 3, 1, 499.99),   -- PlayStation 5
(4, 1, 1, 89.99),    -- Google Nest Hub
(4, 14, 1, 44.99),   -- Smart Water Bottle
(4, 12, 5, 19.99),   -- 5x Silicone Food Bags
(5, 15, 1, 1299.99), -- Gaming Laptop
(6, 13, 1, 399.99),  -- Electric Skateboard
(7, 10, 1, 99.99),   -- Smart Herb Garden
(7, 11, 1, 129.99),  -- Ultra HD Webcam
(7, 14, 2, 44.99),   -- 2x Smart Water Bottle (cancelled)
(8, 8, 1, 149.99),   -- Bluetooth Turntable
(9, 6, 1, 249.99),   -- Standing Desk
(10, 16, 1, 159.99), -- Massage Gun
(11, 1, 1, 89.99),   -- Google Nest Hub
(12, 9, 1, 349.99);  -- Nintendo Switch OLED