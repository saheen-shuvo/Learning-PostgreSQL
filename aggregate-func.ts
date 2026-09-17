//Aggregate Functions: Aggregate functions perform calculations on a set of values and return a single value. They are commonly used in SQL queries to summarize data. Some of the most frequently used aggregate functions include:

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

//select count(*), sum(salary), avg(age), min(age), max(age) from users where country = 'USA'; // Returns the count, sum, average, minimum, and maximum values for users from the USA

