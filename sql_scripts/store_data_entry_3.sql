-----------------------------------------------------
-- Insert Users (10 users)
-----------------------------------------------------
INSERT INTO Users (name, email, password, address, age, gender, city, state, country, loyalty_points, referral_code, created_at, last_login, last_purchase)
VALUES
('John Doe', 'john@example.com', 'hashed_password', '123 Main St, Springfield', 35, 'Male', 'Springfield', 'IL', 'USA', 150, 'REF123', '2023-01-15 09:00:00', '2023-04-05 10:00:00', '2023-04-04 15:00:00'),
('Jane Smith', 'jane@example.com', 'hashed_password', '456 Oak Ave, Metropolis', 28, 'Female', 'Metropolis', 'NY', 'USA', 200, 'REF456', '2023-02-20 11:30:00', '2023-04-03 09:00:00', '2023-04-03 09:30:00'),
('Alice Johnson', 'alice@example.com', 'hashed_password', '789 Pine Rd, Gotham', 42, 'Female', 'Gotham', 'NJ', 'USA', 80, 'REF789', '2023-03-10 14:20:00', '2023-04-02 12:00:00', '2023-04-02 12:30:00'),
('Bob Brown', 'bob@example.com', 'hashed_password', '101 Maple St, Star City', 30, 'Male', 'Star City', 'CA', 'USA', 120, 'REF101', '2023-01-25 08:15:00', '2023-04-04 11:00:00', '2023-04-04 11:20:00'),
('Charlie Davis', 'charlie@example.com', 'hashed_password', '202 Birch Ln, Central City', 38, 'Male', 'Central City', 'TX', 'USA', 90, 'REF202', '2023-02-15 16:45:00', '2023-04-05 14:00:00', '2023-04-05 14:15:00'),
('Diana Prince', 'diana@example.com', 'hashed_password', '321 Justice Ave, Themyscira', 32, 'Female', 'Themyscira', 'DC', 'USA', 250, 'REF321', '2023-01-30 12:00:00', '2023-04-03 16:00:00', '2023-04-03 16:30:00'),
('Bruce Wayne', 'bruce@example.com', 'hashed_password', '1007 Mountain Dr, Gotham', 45, 'Male', 'Gotham', 'NJ', 'USA', 300, 'REF1007', '2023-02-05 09:30:00', '2023-04-04 18:00:00', '2023-04-04 18:20:00'),
('Clark Kent', 'clark@example.com', 'hashed_password', '344 Clinton St, Metropolis', 38, 'Male', 'Metropolis', 'NY', 'USA', 180, 'REF344', '2023-03-01 10:00:00', '2023-04-01 11:00:00', '2023-04-01 11:15:00'),
('Barry Allen', 'barry@example.com', 'hashed_password', '22 Speed Ln, Central City', 29, 'Male', 'Central City', 'TX', 'USA', 110, 'REF22', '2023-03-10 14:00:00', '2023-04-02 14:00:00', '2023-04-02 14:30:00'),
('Hal Jordan', 'hal@example.com', 'hashed_password', '77 Lantern Blvd, Coast City', 33, 'Male', 'Coast City', 'CA', 'USA', 95, 'REF77', '2023-03-15 08:00:00', '2023-04-03 08:30:00', '2023-04-03 08:45:00'),
('Selina Kyle', 'selina@example.com', 'hashed_password', '12 Catwalk Alley, Gotham', 31, 'Female', 'Gotham', 'NJ', 'USA', 140, 'REFCAT12', '2023-01-18 10:00:00', '2023-04-05 17:00:00', '2023-04-05 17:20:00'),
('Arthur Curry', 'arthur@example.com', 'hashed_password', '99 Ocean Dr, Atlantis', 35, 'Male', 'Atlantis', 'FL', 'USA', 85, 'REFOCEAN', '2023-02-12 13:30:00', '2023-04-04 13:00:00', '2023-04-04 13:15:00'),
('Victor Stone', 'victor@example.com', 'hashed_password', '404 Tech Blvd, Cyborg City', 27, 'Male', 'Cyborg City', 'WA', 'USA', 70, 'REFCYBORG', '2023-03-05 15:45:00', '2023-04-03 15:00:00', '2023-04-03 15:20:00'),
('Lois Lane', 'lois@example.com', 'hashed_password', '500 Press Ave, Metropolis', 34, 'Female', 'Metropolis', 'NY', 'USA', 160, 'REFPRESS', '2023-02-25 09:45:00', '2023-04-02 10:00:00', '2023-04-02 10:15:00'),
('Wally West', 'wally@example.com', 'hashed_password', '123 Velocity Rd, Central City', 26, 'Male', 'Central City', 'TX', 'USA', 130, 'REFWALLY', '2023-03-12 12:30:00', '2023-04-01 12:45:00', '2023-04-01 13:00:00');

-----------------------------------------------------
-- Insert Products (8 products)
-----------------------------------------------------
INSERT INTO Products (name, description, price, stock_quantity, sku, brand, supplier, dimensions, weight, average_rating, review_count, on_sale, discontinued_at, created_at)
VALUES
('Smartphone X', 'Latest generation smartphone with cutting-edge features.', 699.99, 50, 'SMX-001', 'TechCorp', 'Global Tech Supplies', '5x2.5x0.3 inches', 0.4, 4.5, 120, true, NULL, '2023-01-10 10:00:00'),
('Laptop Pro', 'High-performance laptop for professionals.', 1299.99, 30, 'LTP-002', 'ComputeMax', 'Office Tech Distributors', '13x9x0.7 inches', 2.0, 4.7, 85, false, NULL, '2023-02-05 11:00:00'),
('Wireless Earbuds', 'Noise-cancelling earbuds with long battery life.', 149.99, 100, 'WEB-003', 'SoundWave', 'Audio Distributors Inc.', '0.5x0.5x0.5 inches', 0.05, 4.3, 200, true, NULL, '2023-03-01 12:00:00'),
('Smartwatch Z', 'Feature-rich smartwatch with health tracking.', 199.99, 80, 'SWZ-004', 'Wearables Inc.', 'Global Tech Supplies', '1.5x1.5x0.4 inches', 0.1, 4.0, 65, false, NULL, '2023-01-20 09:30:00'),
('E-Reader Lite', 'Lightweight e-reader with high-resolution display.', 89.99, 150, 'ERL-005', 'ReadEasy', 'Book Distributors LLC', '6x4x0.3 inches', 0.3, 4.6, 150, true, NULL, '2023-02-15 10:15:00'),
('Gaming Console Y', 'Next-gen gaming console with immersive graphics.', 499.99, 40, 'GCY-006', 'GameStar', 'Entertainment Supplies Inc.', '12x8x3 inches', 3.5, 4.8, 95, true, NULL, '2023-03-10 15:00:00'),
('4K TV Ultra', 'Stunning 4K television with HDR support.', 899.99, 25, '4KTV-007', 'ViewMax', 'Electro Wholesale', '48x28x3 inches', 15.0, 4.4, 70, false, NULL, '2023-02-25 14:00:00'),
('Bluetooth Speaker Boom', 'Portable speaker with powerful bass and connectivity.', 129.99, 120, 'BSB-008', 'SoundBlast', 'Audio Distributors Inc.', '7x3x3 inches', 0.8, 4.2, 110, true, NULL, '2023-03-05 13:00:00'),
('Tablet Z', 'High-resolution tablet with robust performance.', 399.99, 60, 'TBZ-009', 'TechCorp', 'Global Tech Supplies', '10x7x0.3 inches', 0.8, 4.5, 90, true, NULL, '2023-03-15 10:00:00'),
('Smart Home Hub', 'Centralized device to manage smart home devices.', 129.99, 100, 'SHH-010', 'HomeSmart', 'Smart Home Suppliers', '4x4x1 inches', 0.6, 4.2, 50, true, NULL, '2023-03-20 11:00:00'),
('Wireless Charger Pro', 'Fast wireless charger for multiple devices.', 59.99, 200, 'WCP-011', 'ChargeIt', 'Electro Supplies', '3x3x0.5 inches', 0.2, 4.0, 75, true, NULL, '2023-03-25 12:00:00'),
('Noise Cancelling Headphones', 'Premium headphones with advanced noise cancellation.', 299.99, 70, 'NCH-012', 'SoundWave', 'Audio Distributors Inc.', '7x6x3 inches', 0.7, 4.7, 100, false, NULL, '2023-03-30 14:00:00'),
('Portable SSD Drive', 'High-speed portable SSD with 1TB capacity.', 149.99, 150, 'SSD-013', 'DataMax', 'Storage Solutions Inc.', '4x3x0.4 inches', 0.15, 4.8, 60, true, NULL, '2023-04-01 10:00:00');

-----------------------------------------------------
-- Insert Categories (5 categories)
-----------------------------------------------------
INSERT INTO Categories (name)
VALUES
('Electronics'),
('Books'),
('Gaming'),
('Home Entertainment'),
('Wearables');

-----------------------------------------------------
-- Insert Campaigns (3 campaigns)
-----------------------------------------------------
INSERT INTO Campaigns (name, start_date, end_date, budget)
VALUES
('Spring Sale', '2022-03-01 00:00:00', '2022-03-31 23:59:59', 5000.00),
('Holiday Sale', '2022-12-01 00:00:00', '2022-12-31 23:59:59', 10000.00),
('Flash Deal', '2023-04-01 00:00:00', '2023-04-07 23:59:59', 2000.00),
('Summer Bonanza', '2023-06-01 00:00:00', '2023-06-30 23:59:59', 7000.00);

-----------------------------------------------------
-- Insert Detailed Historical Orders
-----------------------------------------------------
-- Q1 2022 Orders (5 orders)
INSERT INTO Orders (user_id, total_price, order_status, shipping_address, payment_method, order_source, discount_code, created_at, updated_at, shipped_date, delivered_date, return_reason, campaign_id)
VALUES
  (1, 1050.75, 'Delivered', '101 Alpha St, Springfield', 'Credit Card', 'Web', 'WINTER20', '2022-01-12 10:00:00', '2022-01-12 10:05:00', '2022-01-13 09:00:00', '2022-01-14 15:00:00', NULL, NULL),
  (2, 750.00, 'Delivered', '202 Beta Ave, Metropolis', 'PayPal', 'Mobile', 'WINTER15', '2022-02-08 11:00:00', '2022-02-08 11:05:00', '2022-02-09 10:00:00', '2022-02-10 14:00:00', NULL, NULL),
  (3, 560.40, 'Delivered', '303 Gamma Rd, Gotham', 'Debit Card', 'Web', NULL, '2022-03-05 14:30:00', '2022-03-05 14:35:00', '2022-03-06 09:00:00', '2022-03-07 12:00:00', NULL, 1),
  (4, 980.00, 'Pending', '404 Delta Ln, Star City', 'Credit Card', 'Mobile', 'WINTER10', '2022-03-10 15:00:00', '2022-03-10 15:05:00', NULL, NULL, NULL, 1),
  (5, 1200.50, 'Cancelled', '505 Epsilon Blvd, Central City', 'PayPal', 'Web', 'WINTER25', '2022-03-15 16:00:00', '2022-03-15 16:05:00', NULL, NULL, 'Out of stock', 1);

-- Q2 2022 Orders (5 orders)
INSERT INTO Orders (user_id, total_price, order_status, shipping_address, payment_method, order_source, discount_code, created_at, updated_at, shipped_date, delivered_date, return_reason, campaign_id)
VALUES
  (6, 1300.00, 'Delivered', '606 Zeta St, Themyscira', 'Credit Card', 'Web', 'SPRING20', '2022-04-12 10:00:00', '2022-04-12 10:05:00', '2022-04-13 09:00:00', '2022-04-14 15:00:00', NULL, NULL),
  (7, 890.25, 'Delivered', '707 Eta Ave, Gotham', 'Debit Card', 'Mobile', 'SPRING15', '2022-05-05 11:00:00', '2022-05-05 11:05:00', '2022-05-06 08:30:00', '2022-05-07 12:00:00', NULL, NULL),
  (8, 1500.00, 'Returned', '808 Theta Rd, Metropolis', 'Credit Card', 'Web', 'SPRING30', '2022-05-20 12:00:00', '2022-05-20 12:05:00', '2022-05-21 09:00:00', '2022-05-22 14:00:00', 'Damaged product', NULL),
  (9, 1100.40, 'Delivered', '909 Iota Blvd, Central City', 'PayPal', 'Mobile', 'SPRING10', '2022-06-02 13:00:00', '2022-06-02 13:05:00', '2022-06-03 09:00:00', '2022-06-04 11:30:00', NULL, NULL),
  (10, 980.75, 'Pending', '1010 Kappa Ln, Star City', 'Debit Card', 'Web', NULL, '2022-06-10 14:00:00', '2022-06-10 14:05:00', NULL, NULL, NULL, NULL);

-- Q3 2022 Orders (5 orders)
INSERT INTO Orders (user_id, total_price, order_status, shipping_address, payment_method, order_source, discount_code, created_at, updated_at, shipped_date, delivered_date, return_reason, campaign_id)
VALUES
  (11, 1340.90, 'Delivered', '1111 Lambda St, Gotham', 'Credit Card', 'Mobile', 'SUMMER10', '2022-07-15 10:00:00', '2022-07-15 10:05:00', '2022-07-16 09:00:00', '2022-07-17 12:00:00', NULL, NULL),
  (1, 650.00, 'Cancelled', '1212 Mu Ave, Metropolis', 'PayPal', 'Web', 'SUMMER20', '2022-08-05 11:00:00', '2022-08-05 11:05:00', NULL, NULL, 'Payment error', NULL),
  (1, 1120.45, 'Delivered', '1313 Nu Rd, Central City', 'Debit Card', 'Mobile', NULL, '2022-08-20 12:00:00', '2022-08-20 12:05:00', '2022-08-21 09:00:00', '2022-08-22 11:00:00', NULL, NULL),
  (14, 990.00, 'Delivered', '1414 Xi Blvd, Themyscira', 'Credit Card', 'Web', 'SUMMER15', '2022-09-10 13:00:00', '2022-09-10 13:05:00', '2022-09-11 09:00:00', '2022-09-12 12:00:00', NULL, NULL),
  (15, 1250.50, 'Pending', '1515 Omicron St, Gotham', 'PayPal', 'Mobile', 'SUMMER25', '2022-09-15 14:00:00', '2022-09-15 14:05:00', NULL, NULL, NULL, NULL);

-- Q4 2022 Orders (5 orders)
INSERT INTO Orders (user_id, total_price, order_status, shipping_address, payment_method, order_source, discount_code, created_at, updated_at, shipped_date, delivered_date, return_reason, campaign_id)
VALUES
  (10, 920.30, 'Delivered', '1616 Pi Ave, Star City', 'Credit Card', 'Web', 'FALL10', '2022-10-05 10:00:00', '2022-10-05 10:05:00', '2022-10-06 09:00:00', '2022-10-07 11:00:00', NULL, NULL),
  (7, 1050.00, 'Returned', '1717 Rho Rd, Metropolis', 'Debit Card', 'Mobile', 'FALL20', '2022-11-02 11:00:00', '2022-11-02 11:05:00', '2022-11-03 09:00:00', '2022-11-04 10:00:00', 'Incorrect item', NULL),
  (8, 1340.90, 'Delivered', '1818 Sigma Blvd, Central City', 'PayPal', 'Web', 'FALL15', '2022-11-15 12:00:00', '2022-11-15 12:05:00', '2022-11-16 09:00:00', '2022-11-17 12:00:00', NULL, NULL),
  (11, 750.00, 'Delivered', '1919 Tau Ln, Gotham', 'Credit Card', 'Mobile', NULL, '2022-12-05 13:00:00', '2022-12-05 13:05:00', '2022-12-06 09:00:00', '2022-12-07 11:00:00', NULL, 2),
  (2, 1120.45, 'Pending', '2020-20 Upsilon St, Themyscira', 'Debit Card', 'Web', 'FALL25', '2022-12-15 14:00:00', '2022-12-15 14:05:00', NULL, NULL, NULL, NULL);

-- Q1 2023 Orders (5 orders)
INSERT INTO Orders (user_id, total_price, order_status, shipping_address, payment_method, order_source, discount_code, created_at, updated_at, shipped_date, delivered_date, return_reason, campaign_id)
VALUES
  (11, 1150.00, 'Delivered', '2121 Veta St, Springfield', 'Credit Card', 'Mobile', 'WINTER15', '2023-01-10 10:00:00', '2023-01-10 10:05:00', '2023-01-11 09:00:00', '2023-01-12 14:00:00', NULL, NULL),
  (12, 780.60, 'Delivered', '2222 Weta Ave, Metropolis', 'Debit Card', 'Web', NULL, '2023-01-15 11:00:00', '2023-01-15 11:05:00', '2023-01-16 09:00:00', '2023-01-17 12:00:00', NULL, NULL),
  (3, 1345.75, 'Pending', '2323 Xeta Rd, Gotham', 'Credit Card', 'Mobile', 'WINTER20', '2023-02-08 12:00:00', '2023-02-08 12:05:00', NULL, NULL, NULL, NULL),
  (4, 1580.00, 'Delivered', '2424 Yeta Blvd, Central City', 'PayPal', 'Web', 'WINTER25', '2023-02-20 13:00:00', '2023-02-20 13:05:00', '2023-02-21 09:00:00', '2023-02-22 11:30:00', NULL, NULL),
  (15, 940.50, 'Delivered', '2525 Zeta Ln, Themyscira', 'Credit Card', 'Mobile', NULL, '2023-03-05 14:00:00', '2023-03-05 14:05:00', '2023-03-06 09:00:00', '2023-03-07 12:00:00', NULL, NULL);

-- Q2 2023 Orders (5 orders)
INSERT INTO Orders (user_id, total_price, order_status, shipping_address, payment_method, order_source, discount_code, created_at, updated_at, shipped_date, delivered_date, return_reason, campaign_id)
VALUES
  (6, 1260.00, 'Delivered', '2626 Alpha Rd, Star City', 'Debit Card', 'Web', 'SPRING10', '2023-04-05 10:00:00', '2023-04-05 10:05:00', '2023-04-06 09:00:00', '2023-04-07 11:00:00', NULL, 3),
  (2, 920.30, 'Delivered', '2727 Beta St, Metropolis', 'Credit Card', 'Mobile', 'SPRING15', '2023-04-15 11:00:00', '2023-04-15 11:05:00', '2023-04-16 09:00:00', '2023-04-17 12:00:00', NULL, 3),
  (2, 1050.00, 'Returned', '2828 Gamma Ave, Gotham', 'PayPal', 'Web', 'SPRING20', '2023-05-05 12:00:00', '2023-05-05 12:05:00', '2023-05-06 09:00:00', '2023-05-07 10:30:00', 'Wrong size', NULL),
  (9, 1340.90, 'Delivered', '2929 Delta Rd, Central City', 'Debit Card', 'Mobile', 'SPRING25', '2023-05-20 13:00:00', '2023-05-20 13:05:00', '2023-05-21 09:00:00', '2023-05-22 11:30:00', NULL, NULL),
  (3, 750.00, 'Pending', '3030 Epsilon Blvd, Themyscira', 'Credit Card', 'Web', NULL, '2023-06-05 14:00:00', '2023-06-05 14:05:00', NULL, NULL, NULL, NULL);

-- Q3 2023 Orders (5 orders)
INSERT INTO Orders (user_id, total_price, order_status, shipping_address, payment_method, order_source, discount_code, created_at, updated_at, shipped_date, delivered_date, return_reason, campaign_id)
VALUES
  (3, 1120.45, 'Delivered', '3131 Zeta Ln, Gotham', 'PayPal', 'Mobile', 'SUMMER10', '2023-07-05 10:00:00', '2023-07-05 10:05:00', '2023-07-06 09:00:00', '2023-07-07 11:00:00', NULL, NULL),
  (2, 990.00, 'Cancelled', '3232 Eta Rd, Metropolis', 'Debit Card', 'Web', 'SUMMER15', '2023-07-15 11:00:00', '2023-07-15 11:05:00', NULL, NULL, 'Out of stock', NULL),
  (3, 1250.50, 'Delivered', '3333 Theta Ave, Central City', 'Credit Card', 'Mobile', NULL, '2023-08-05 12:00:00', '2023-08-05 12:05:00', '2023-08-06 09:00:00', '2023-08-07 11:30:00', NULL, NULL),
  (4, 1150.00, 'Delivered', '3434 Iota Blvd, Themyscira', 'PayPal', 'Web', 'SUMMER20', '2023-08-20 13:00:00', '2023-08-20 13:05:00', '2023-08-21 09:00:00', '2023-08-22 12:00:00', NULL, NULL),
  (3, 780.60, 'Pending', '3535 Kappa Ln, Gotham', 'Debit Card', 'Mobile', 'SUMMER25', '2023-09-05 14:00:00', '2023-09-05 14:05:00', NULL, NULL, NULL, NULL);

-- Q4 2023 Orders (5 orders)
INSERT INTO Orders (user_id, total_price, order_status, shipping_address, payment_method, order_source, discount_code, created_at, updated_at, shipped_date, delivered_date, return_reason, campaign_id)
VALUES
  (3, 1345.75, 'Delivered', '3636 Lambda St, Metropolis', 'Credit Card', 'Web', 'FALL10', '2023-10-05 10:00:00', '2023-10-05 10:05:00', '2023-10-06 09:00:00', '2023-10-07 11:00:00', NULL, NULL),
  (7, 1580.00, 'Returned', '3737 Mu Ave, Central City', 'Debit Card', 'Mobile', 'FALL15', '2023-10-15 11:00:00', '2023-10-15 11:05:00', '2023-10-16 09:00:00', '2023-10-17 10:30:00', 'Defective item', NULL),
  (8, 940.50, 'Delivered', '3838 Nu Rd, Themyscira', 'PayPal', 'Web', NULL, '2023-11-05 12:00:00', '2023-11-05 12:05:00', '2023-11-06 09:00:00', '2023-11-07 11:00:00', NULL, NULL),
  (9, 1260.00, 'Delivered', '3939 Xi Blvd, Gotham', 'Credit Card', 'Mobile', 'FALL20', '2023-11-15 13:00:00', '2023-11-15 13:05:00', '2023-11-16 09:00:00', '2023-11-17 12:00:00', NULL, NULL),
  (2, 920.30, 'Pending', '4040 Omicron St, Metropolis', 'Debit Card', 'Web', NULL, '2023-12-05 14:00:00', '2023-12-05 14:05:00', NULL, NULL, NULL, NULL);

-----------------------------------------------------
-- Insert Corresponding OrderItems for each Order
-----------------------------------------------------
INSERT INTO OrderItems (order_id, product_id, quantity, price, cost_price, discount_applied, tax)
VALUES
  (1, 1, 1, 1050.75, 800.00, 50.00, 70.00),
  (2, 2, 1, 750.00, 500.00, 30.00, 45.00),
  (3, 3, 2, 560.40, 400.00, 20.00, 35.00),
  (4, 4, 1, 980.00, 700.00, 40.00, 60.00),
  (5, 5, 1, 1200.50, 850.00, 60.00, 80.00),
  (6, 6, 1, 1300.00, 900.00, 70.00, 75.00),
  (7, 7, 2, 890.25, 600.00, 50.00, 55.00),
  (8, 8, 1, 1500.00, 1000.00, 80.00, 90.00),
  (9, 9, 1, 1100.40, 750.00, 40.00, 65.00),
  (10, 10, 1, 980.75, 650.00, 35.00, 50.00),
  (11, 11, 1, 1340.90, 900.00, 60.00, 70.00),
  (12, 12, 1, 650.00, 450.00, 30.00, 40.00),
  (13, 1, 1, 1120.45, 800.00, 50.00, 60.00),
  (14, 2, 2, 990.00, 700.00, 45.00, 55.00),
  (15, 3, 1, 1250.50, 850.00, 55.00, 65.00),
  (16, 4, 1, 920.30, 600.00, 35.00, 50.00),
  (17, 5, 1, 1050.00, 700.00, 40.00, 60.00),
  (18, 6, 2, 1340.90, 900.00, 60.00, 75.00),
  (19, 7, 1, 750.00, 500.00, 30.00, 45.00),
  (20, 8, 1, 1120.45, 750.00, 50.00, 65.00),
  (21, 9, 1, 1150.00, 800.00, 55.00, 70.00),
  (22, 10, 1, 780.60, 500.00, 40.00, 45.00),
  (23, 11, 1, 1345.75, 900.00, 65.00, 75.00),
  (24, 12, 2, 1580.00, 1000.00, 80.00, 90.00),
  (25, 1, 1, 940.50, 650.00, 50.00, 60.00),
  (26, 2, 1, 1260.00, 800.00, 55.00, 70.00),
  (27, 3, 1, 920.30, 600.00, 40.00, 50.00),
  (28, 4, 1, 1050.00, 700.00, 45.00, 60.00),
  (29, 5, 1, 1340.90, 850.00, 60.00, 70.00),
  (30, 6, 2, 750.00, 500.00, 30.00, 45.00),
  (31, 7, 1, 1120.45, 750.00, 50.00, 65.00),
  (32, 8, 1, 990.00, 650.00, 40.00, 55.00),
  (33, 9, 1, 1250.50, 800.00, 55.00, 70.00),
  (34, 10, 1, 1150.00, 700.00, 50.00, 65.00),
  (35, 11, 2, 780.60, 500.00, 35.00, 45.00),
  (36, 12, 1, 1345.75, 850.00, 60.00, 70.00),
  (37, 1, 1, 1580.00, 900.00, 75.00, 80.00),
  (38, 2, 1, 940.50, 650.00, 50.00, 60.00),
  (39, 3, 1, 1260.00, 800.00, 55.00, 70.00),
  (40, 4, 1, 920.30, 600.00, 40.00, 50.00);
  
-----------------------------------------------------
-- Insert ProductCategories (assigning products to categories)
-----------------------------------------------------
INSERT INTO ProductCategories (product_id, category_id)
VALUES
(1, 1),  -- Smartphone X -> Electronics
(2, 1),  -- Laptop Pro -> Electronics
(3, 1),  -- Wireless Earbuds -> Electronics
(4, 5),  -- Smartwatch Z -> Wearables
(5, 2),  -- E-Reader Lite -> Books
(6, 3),  -- Gaming Console Y -> Gaming
(7, 4),  -- 4K TV Ultra -> Home Entertainment
(8, 1),  -- Bluetooth Speaker Boom -> Electronics
(8, 4),  -- Bluetooth Speaker Boom also in Home Entertainment
(9, 1),   -- Tablet Z -> Electronics
(10, 1),  -- Smart Home Hub -> Electronics
(11, 1),  -- Wireless Charger Pro -> Electronics
(12, 1),  -- Noise Cancelling Headphones -> Electronics
(12, 4),  -- Noise Cancelling Headphones also under Home Entertainment
(13, 1);  -- Portable SSD Drive -> Electronics
-----------------------------------------------------
-- Insert ProductReviews (10 reviews across products)
-----------------------------------------------------
INSERT INTO ProductReviews (product_id, user_id, rating, review, created_at)
VALUES
(1, 1, 5, 'Fantastic phone with great performance!', '2023-03-18 10:00:00'),
(1, 2, 4, 'Good, but battery life could be better.', '2023-03-20 12:00:00'),
(2, 2, 5, 'Excellent laptop for my work needs.', '2023-03-22 09:00:00'),
(3, 3, 4, 'Sound quality is impressive, comfortable fit.', '2023-03-26 14:00:00'),
(4, 4, 3, 'Decent smartwatch, but features are lacking.', '2023-04-02 11:00:00'),
(5, 5, 5, 'Very lightweight and easy to use!', '2023-04-05 08:00:00'),
(6, 6, 5, 'Gaming console is a blast; immersive experience!', '2023-04-03 17:00:00'),
(7, 7, 4, '4K TV Ultra delivers vibrant visuals, but a bit pricey.', '2023-04-04 10:30:00'),
(8, 8, 3, 'Speaker has decent sound but lacks deep bass.', '2023-03-31 12:00:00'),
(8, 9, 4, 'Great portable speaker with impressive volume.', '2023-04-01 13:00:00');

-----------------------------------------------------
-- Insert SupportTickets (4 tickets)
-----------------------------------------------------
INSERT INTO SupportTickets (user_id, order_id, issue_description, status, created_at, resolved_at)
VALUES
(3, 3, 'Received damaged product packaging.', 'Resolved', '2023-03-27 09:00:00', '2023-03-28 15:00:00'),
(4, 4, 'Order was cancelled without notification.', 'Closed', '2023-04-01 12:00:00', '2023-04-02 10:00:00'),
(8, 8, 'Delayed shipment, package arrived late.', 'Resolved', '2023-04-04 11:00:00', '2023-04-05 09:30:00'),
(10, 10, 'Incorrect product description on site.', 'In Progress', '2023-03-29 15:00:00', NULL);

-----------------------------------------------------
-- Insert InventoryLogs (10 logs)
-----------------------------------------------------
INSERT INTO InventoryLogs (product_id, change, log_date, reason)
VALUES
(1, -1, '2023-03-15 09:30:00', 'Sold 1 unit'),
(2, -1, '2023-03-20 14:05:00', 'Sold 1 unit'),
(3, -1, '2023-03-25 16:35:00', 'Sold 1 unit'),
(4, -1, '2023-03-25 16:40:00', 'Sold 1 unit'),
(5, -3, '2023-04-03 13:10:00', 'Sold 2 units and 1 unit return adjustment'),
(6, -1, '2023-04-02 10:05:00', 'Sold 1 unit'),
(7, -1, '2023-04-03 12:05:00', 'Sold 1 unit'),
(8, -2, '2023-03-30 09:15:00', 'Sold 2 units'),
(1, 5, '2023-04-06 08:00:00', 'Restocked 5 units'),
(3, 10, '2023-04-07 09:00:00', 'New stock arrival');

-----------------------------------------------------
-- Insert UserActivity (10 activity records)
-----------------------------------------------------
INSERT INTO UserActivity (user_id, activity_type, activity_detail, activity_date)
VALUES
(1, 'Page View', 'Viewed Smartphone X product page', '2023-03-14 10:00:00'),
(2, 'Search', 'Searched for Laptop Pro', '2023-03-19 11:00:00'),
(3, 'Click', 'Clicked on Wireless Earbuds advertisement', '2023-03-24 15:00:00'),
(4, 'Page View', 'Viewed Smartwatch Z details', '2023-04-01 10:00:00'),
(5, 'Search', 'Searched for E-Reader Lite reviews', '2023-04-03 12:00:00'),
(6, 'Page View', 'Browsed Gaming Console Y promotions', '2023-04-02 09:00:00'),
(7, 'Click', 'Clicked on 4K TV Ultra banner', '2023-04-03 11:00:00'),
(8, 'Search', 'Searched for Bluetooth Speaker Boom specs', '2023-03-29 10:30:00'),
(9, 'Page View', 'Viewed order history', '2023-04-04 15:00:00'),
(10, 'Click', 'Clicked on product review for Wireless Earbuds', '2023-03-28 12:30:00');
