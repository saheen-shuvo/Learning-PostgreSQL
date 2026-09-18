//Foreign Key: A column or a set of columns in one table that refers to the primary key in another table.

//ALTER TABLE orders ADD CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customers(id);

//ALTER TABLE orders ADD CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES products(id);