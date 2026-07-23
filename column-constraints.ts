//Column Constraints

//Not Null Constraint
//The NOT NULL constraint enforces a column to not accept NULL values. This ensures that every row in the table has a valid value for that column.

//UNIQUE Constraint
//The UNIQUE constraint ensures that all values in a column are distinct. It prevents duplicate entries in the specified column. ex: email

//PRIMARY KEY Constraint
//The PRIMARY KEY constraint uniquely identifies each record in a table. It combines the properties of NOT NULL and UNIQUE, ensuring that the primary key column(s) cannot have NULL values and must contain unique values.

//FOREIGN KEY Constraint
//The FOREIGN KEY constraint establishes a relationship between two tables. It ensures that the values in the foreign key column(s) match the values in the primary key column(s) of another table, maintaining referential integrity.

//DEFAULT Constraint
//The DEFAULT constraint provides a default value for a column when no value is specified during an insert operation. If no value is provided, the default value will be used. ex: active

//CHECK Constraint
//The CHECK constraint allows you to specify a condition that must be met for the values in a column. It ensures that the data entered into the column satisfies the defined condition. ex: age >= 18

// create table students(
//   id serial primary key,
//   username varchar(20) not null,
//   email varchar(100) unique,
//   age smallint check (age >= 18),
//   isActive boolean default true
// );
