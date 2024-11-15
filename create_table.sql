\c example_bookshop;
-- create the books table here
CREATE TABLE books (
    identifier SERIAL PRIMARY KEY,
    title VARCHAR(60),
    price_in_pence INT,
    quantity_in_stock INT,
    release_date Date,
    is_fiction BOOLEAN
);