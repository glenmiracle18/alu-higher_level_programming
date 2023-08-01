-- create a database and a user 'user_0d_2'
-- user should only have SELECT privileges in the new database
-- set a user password

CREATE DATABASE IF NOT EXISTS hbtn_0d_2;
CREATE USER IF NOT EXIXTS 'user_0d_2'@'localhost' IDENTIFIED BY 'user_0d2_pwd';
GRANT SELECT ON 'hbtn_0d_2'.* TO 'user_0d_2'@'localhost';
FLUSH PRIVILEGES;
