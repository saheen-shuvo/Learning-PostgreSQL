//DISTINCT: The DISTINCT keyword is used to return only unique (distinct) values in the result set, eliminating duplicate rows. It can be applied to one or more columns in a SELECT statement. When used with multiple columns, DISTINCT will return unique combinations of the specified columns.

//select distinct country from users;

//WHERE: The WHERE clause is used to filter records based on specified conditions. It allows you to retrieve only the rows that meet certain criteria. You can use various operators and logical conditions in the WHERE clause to refine your query results.

//select * from users where age > 30;
//select * from users where country = 'USA' and age < 25;
//select * from users where first_name like 'J%' or last_name like '%son';