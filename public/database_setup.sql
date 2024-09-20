-- Create the database
CREATE DATABASE IF NOT EXISTS book_inventory;

-- Use the database
USE book_inventory;

-- Create the Inventory table
CREATE TABLE IF NOT EXISTS Inventory (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  genre VARCHAR(100),
  publication_date DATE,
  isbn VARCHAR(13) UNIQUE
);
