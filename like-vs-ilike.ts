//LIKE: Like is a comparison operator used in SQL to search for a specified pattern in a column. It allows you to perform pattern matching using wildcard characters. The two most commonly used wildcard characters are:
//1. % (percent sign): Represents zero or more characters. It can be used to match any sequence of characters, including an empty string.
//2. _ (underscore): Represents a single character. It can be used to match any single character in a specific position.

//Example: select * from users where first_name like 'J%'; // Finds names starting with 'J'
//Example: select * from users where last_name like '%son'; // Finds names ending with 'son'
//Example: select * from users where email like '%@gmail.com'; // Finds email addresses ending with '@gmail.com'

//ILIKE: ILIKE is a case-insensitive version of the LIKE operator. It performs pattern matching without considering the case of the characters. It is particularly useful when you want to search for patterns regardless of whether they are in uppercase or lowercase.

//Example: select * from users where first_name ilike 'j%'; // Finds names starting with 'j' or 'J'
//Example: select * from users where last_name ilike '%SON'; // Finds names ending with 'son', 'Son', 'SON', etc.
//Example: select * from users where email ilike '%@GMAIL.COM'; // Finds email addresses ending with '@gmail.com', '@Gmail.com', etc.