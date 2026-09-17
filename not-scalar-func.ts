//NOT: Not operator is used to negate a condition in a WHERE clause. It returns true if the condition is false and false if the condition is true.

//select * from users where not country = 'USA'; // Finds records where the country is not 'USA'

//select * from users where not age > 30; // Finds records where the age is not greater than 30

//Built-in functions: SQL provides a variety of built-in functions that can be used to perform calculations, manipulate data, and retrieve specific information from the database. Some commonly used built-in functions include:

//1. COUNT(): Returns the number of rows that match a specified condition.
//Example: select count(*) from users where country = 'USA'; // Counts the number of users from the USA

//2. SUM(): Returns the total sum of a numeric column.
//Example: select sum(salary) from employees; // Calculates the total salary of all employees

//3. AVG(): Returns the average value of a numeric column.
//Example: select avg(age) from users; // Calculates the average age of users

//4. MIN(): Returns the minimum value in a column.
//Example: select min(age) from users; // Finds the youngest user

//5. MAX(): Returns the maximum value in a column.
//Example: select max(age) from users; // Finds the oldest user

//6. UPPER(): Converts a string to uppercase.
//Example: select upper(first_name) from users; // Converts first names to uppercase

//7. LOWER(): Converts a string to lowercase.
//Example: select lower(last_name) from users; // Converts last names to lowercase

//8. ROUND(): Rounds a numeric value to the nearest integer or specified decimal places.
//Example: select round(salary, 2) from employees; // Rounds salaries to 2 decimal places

//9. NOW(): Returns the current date and time.
//Example: select now(); // Retrieves the current date and time

//10. COALESCE(): Returns the first non-null value from a list of expressions.
//Example: select coalesce(middle_name, 'N/A') from users; // Returns middle name or 'N/A' if null