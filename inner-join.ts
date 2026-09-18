//INNER JOIN: Returns records that have matching values in both tables.

//SELECT customers.name, orders.order_date FROM customers INNER JOIN orders ON customers.id = orders.customer_id;

//SELECT customers.name, orders.order_date, products.product_name FROM customers INNER JOIN orders ON customers.id = orders.customer_id INNER JOIN products ON orders.product_id = products.id;