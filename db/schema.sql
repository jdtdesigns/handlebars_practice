-- Drop or delete the database to reset the data - erase all data/tables
DROP DATABASE IF EXISTS books_db;
-- Create our books_db database
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE biographies (
  id INT AUTO_INCREMENT,
  name VARCHAR(250),
  author VARCHAR(250),
  PRIMARY KEY(id)
);

INSERT INTO biographies (name, author) VALUES 
  ('Titanic', 'JD'),
  ('Another', 'JD'),
  ('One More', 'JD');