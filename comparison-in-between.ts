//Comparison: The comparison operators are used to compare values in SQL. They allow you to filter records based on specific conditions. The most commonly used comparison operators include:

//1. = (Equal to): This operator checks if the value on the left is equal to the value on the right.
//Example: select * from users where age = 30;

//2. <> or != (Not equal to): This operator checks if the value on the left is not equal to the value on the right.
//Example: select * from users where country <> 'USA';

//3. > (Greater than): This operator checks if the value on the left is greater than the value on the right.
//Example: select * from users where age > 25;

//4. < (Less than): This operator checks if the value on the left is less than the value on the right.
//Example: select * from users where age < 40;

//5. >= (Greater than or equal to): This operator checks if the value on the left is greater than or equal to the value on the right.
//Example: select * from users where age >= 18;

//6. <= (Less than or equal to): This operator checks if the value on the left is less than or equal to the value on the right.
//Example: select * from users where age <= 65;

//7. BETWEEN: This operator checks if a value is within a specified range (inclusive).
//Example: select * from users where age between 20 and 30;

//8. IN: This operator checks if a value matches any value in a list of values.
//Example: select * from users where country in ('USA', 'Canada', 'UK');

//9. LIKE: This operator is used for pattern matching. It allows you to search for a specified pattern in a column.
//Example: select * from users where first_name like 'J%'; // Finds names starting with 'J'

//10. IS NULL / IS NOT NULL: These operators are used to check for NULL values in a column.
//Example: select * from users where last_name is null; // Finds records with no last name