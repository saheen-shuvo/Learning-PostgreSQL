//LEFT JOIN: Returns all records from the left table (table1), and the matched records from the right table (table2). The result is NULL from the right side, if there is no match.

//SELECT customers.name, orders.order_date FROM customers LEFT JOIN orders ON customers.id = orders.customer_id;

//SELECT customers.name, orders.order_date, products.product_name FROM customers LEFT JOIN orders ON customers.id = orders.customer_id LEFT JOIN products ON orders.product_id = products.id;

//RIGHT JOIN: Returns all records from the right table (table2), and the matched records from the left table (table1). The result is NULL from the left side, when there is no match.

//SELECT customers.name, orders.order_date FROM customers RIGHT JOIN orders ON customers.id = orders.customer_id;

//SELECT customers.name, orders.order_date, products.product_name FROM customers RIGHT JOIN orders ON customers.id = orders.customer_id RIGHT JOIN products ON orders.product_id = products.id;