-- lists all the tables of a database in mysql server
-- the database name will be passed as arguments of mysql command

SET @db_name := ?;
USE @db_name;
SHOW TABLES;
