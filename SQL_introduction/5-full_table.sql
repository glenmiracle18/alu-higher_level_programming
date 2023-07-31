-- Write a script that prints the full description of the table first_table from the database hbtn_0c_0 in your MySQL server.
-- The database name will be passed as an argument of the mysql command
-- You are not allowed to use the DESCRIBE or EXPLAIN statements

SELECT COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_DEFAULT, COLUMN_KEY, EXTRA
FROM INFORMATION.SCHEMA.COLUMNS
WHERE TABLE_NAME = 'first_table';
