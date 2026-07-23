//##Create a Database
//create database database_name;

//##Delete a Database
//drop database database_name;

//##Comment out sql query
//use -- to comment out a single line
//use /* */ to comment out multiple lines

//##Create a Table
//create table table_name 
// (column_name1 data_type constraint,
//  column_name2 data_type constraint, 
// ...);

//##Various Data Types
//integer, smallint, bigint, decimal, numeric, real, double precision
//serial, bigserial
//money
//character varying(n), varchar(n)
//character(n), char(n)
//text
//boolean
//date
//timestamp without time zone
//timestamp with time zone

//##Constraints
//not null, unique, primary key, foreign key, check, default

//##Delete a Table
//drop table table_name;
//safer: drop table if exists table_name;

// create table students(
//   id serial,
//   name varchar(50),
//   age int,
//   isActive boolean,
//   dob date
// );