# Book Inventory Management System

A simple inventory management system for books built with Node.js, MySQL, Express, and a front-end interface. Users can add books, filter by different criteria, and export the book data.

## Demo Video

To see the project in action, watch the [Demo Video](https://drive.google.com/file/d/1nj7fDx36HBAM_9UULLicm_D75RRNv818/view?usp=sharing).

## Prerequisites
- Node.js installed (v12+)
- MySQL installed (v8.0+)
- Git installed

## Project Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/book-inventory.git
   cd book-inventory

2. **Install Node.js Dependencies**:
   ```bash
   npm install
  
3. **Set Up the Database**:
   - Log into MySQL using your terminal:
        ```bash
        mysql -u root -p
        
   - Run the SQL script to create the database and table:
        ```bash
        source public/database_setup.sql;

4. **Start the Backend Server**:
   ```bash
   node src/server.js

5. **Access the Frontend**:
   - Open index.html located in the public/ folder in your web browser or set up a local web server to run the front-end.

## Features
- Add new books to the inventory.
- Filter books based on title, author, genre, and publication date.
- Display filtered results in a table format.
- Export book data in JSON format.
  
## API Endpoints
- Add Book: POST /add-book
  - Request body: { title, author, genre, publication_date, isbn }
- Filter Books: GET /filter-books
  - Query parameters: title, author, genre, publication_date
- Export Books: GET /export-books
  
## How to Use the System
1. Open the app in a browser.
2. Use the form to add a new book.
3. Use the filter form to search for books.
4. Click the export button to download the data.
   




        

     


     
