-- creates a new table in the database hbtn_0d_usa called cities
-- id must be uniqe, auto incremental, and can't be null and also PK

CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;
CREATE TABLE IF NOT EXISTS hbtn_0d_usa.cities (id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, state_id INT NOT NULL, name VARCHAR(256) NOT NULL, FOREIGN KEY (state_id) REFERNCES hbtn_0d_usa.states(id));
