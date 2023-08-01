-- Write a script that creates the table unique_id on your MySQL server.
-- id INT with the default value 1 and must be unique
-- name VARCHAR(256)

CREATE USER IF NOT EXISTS uniqe_id (id INT, name VARCHAR(256));
