//Data Types and Examples

//INT
//INTEGER, INT, SMALLINT, BIGINT- Integer types for storing whole numbers
//Example:
//CREATE TABLE example_table (
//    id SERIAL PRIMARY KEY,
//    age INT NOT NULL
//);
//DECIMAL, NUMERIC, REAL, DOUBLE PRECISION - Numeric types for storing decimal values
//Example:
//CREATE TABLE example_table (
//    id SERIAL PRIMARY KEY,
//    price DECIMAL(10, 2) NOT NULL
//);
//UUID - Universally Unique Identifier, often used as a primary key
//Example:
//CREATE TABLE example_table (
//    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//    name VARCHAR(100) NOT NULL
//);
//SERIAL, BIGSERIAL - Auto-incrementing integer types
//Example:
//CREATE TABLE example_table (
//    id SERIAL PRIMARY KEY,
//    name VARCHAR(100) NOT NULL
//);
//MONEY - Stores currency values with a fixed fractional precision
//Example:
//CREATE TABLE example_table (
//    id SERIAL PRIMARY KEY,
//    salary MONEY NOT NULL
//);
//CHARACTER VARYING(n), VARCHAR(n) - Variable-length character type
//Example:
//CREATE TABLE example_table (
//    id SERIAL PRIMARY KEY,
//    description VARCHAR(255) NOT NULL
//);
//CHARACTER(n), CHAR(n) - Fixed-length character type
//Example:
//CREATE TABLE example_table (
//    id SERIAL PRIMARY KEY,
//    code CHAR(10) NOT NULL
//);
//TEXT - Supports variable-length strings of any length
//Example:
//CREATE TABLE example_table (
//    id SERIAL PRIMARY KEY,
//    content TEXT NOT NULL
//);
//BOOLEAN - Supports TRUE, FALSE, and NULL values
//Example:
//CREATE TABLE example_table (
//    id SERIAL PRIMARY KEY,
//    is_active BOOLEAN NOT NULL
//);
//DATE - Stores date values (year, month, day)
//Example:
//CREATE TABLE example_table (
//    id SERIAL PRIMARY KEY,
//    birth_date DATE NOT NULL
//);
//TIMESTAMP WITHOUT TIME ZONE -Stores date and time without timezone information
//Example:
//CREATE TABLE example_table (
//    id SERIAL PRIMARY KEY,
//    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
//);
//TIMESTAMP WITH TIME ZONE - Stores date and time with timezone information
//Example:
//CREATE TABLE example_table (
//    id SERIAL PRIMARY KEY,
//    updated_at TIMESTAMP WITH TIME ZONE NOT NULL
//);

//Data Types Summary

//INT, INTEGER, SMALLINT, BIGINT
//DECIMAL, NUMERIC, REAL, DOUBLE PRECISION  