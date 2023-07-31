-- creates a table called first_table
-- id = INT, name VARCHAR(256)
-- database name will be passed as an argument
-- not allowed to use SELECT or SHOW statements

CREATE TABLE IF NOT EXIST first_table (
	name INT,
	name VARCHAR(256)
);
