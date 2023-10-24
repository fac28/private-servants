BEGIN;

INSERT INTO categories (name)
VALUES
    ('Electronics'),
    ('Clothing'),
    ('Home & Kitchen'),
    ('Sports'),
    ('Unicorn Accessories');

-- Insert Products
INSERT INTO products (name, price, description, size, colour, image)
VALUES
    ('Left Airpod', 49.99, 'A single airpod', NULL, 'White', 'temp.jpg'),
    ('Left Airpod', 49.99, 'A single airpod', NULL, 'Black', 'temp.jpg'),
    ('Stained T-Shirt', 9.99, 'Comfortable cotton T-shirt', 'Medium', 'Red', 'temp.jpg'),
    ('Rainbow Unicorn Slippers', 19.99, 'Slippers that make you feel like you are walking on rainbows', 'One Size Fits All', 'Rainbow', 'temp.jpg');

-- Associate Products with Categories
INSERT INTO product_category (product_id, category_id)
VALUES
    (1, 1), -- Left Airpod belongs to Electronics
    (2, 1), -- Left Airpod belongs to Electronics
    (3, 2), -- T-Shirt belongs to Clothing
    (3, 4), -- T-Shirt belongs to Sports
    (4, 2), -- Slippers belong to Clothing
    (4, 3), -- Slippers belong to Home & Kitchen
    (4, 5); -- Slippers belong to Unicorn Accessories

COMMIT;
