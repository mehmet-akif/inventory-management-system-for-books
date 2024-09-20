const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path'); // <-- Add this to manage file paths

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'user1905',  // Replace with your MySQL password
  database: 'book_inventory'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

// Add a new book
app.post('/add-book', (req, res) => {
  const { title, author, genre, publication_date, isbn } = req.body;

  const sql = 'INSERT INTO Inventory (title, author, genre, publication_date, isbn) VALUES (?, ?, ?, ?, ?)';
  const values = [title, author, genre, publication_date, isbn];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error adding book' });
    }
    console.log('Book inserted:', result);  // Log result to see if the query worked
    res.status(200).json({ message: 'Book added successfully' });
  });
});

// Export Books Route (JSON Format)
app.get('/export-books', (req, res) => {
  const sql = 'SELECT * FROM Inventory';

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error exporting books' });
    }

    const csvData = result.map(row => ({
      id: row.id,
      title: row.title,
      author: row.author,
      genre: row.genre,
      publication_date: row.publication_date,
      isbn: row.isbn
    }));

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(csvData));
  });
});

// Filter Books
app.get('/filter-books', (req, res) => {
  const { title, author, genre, publication_date } = req.query;
  let sql = 'SELECT * FROM Inventory WHERE 1=1';
  const values = [];

  if (title) {
    sql += ' AND title LIKE ?';
    values.push(`%${title}%`);
  }
  if (author) {
    sql += ' AND author LIKE ?';
    values.push(`%${author}%`);
  }
  if (genre) {
    sql += ' AND genre LIKE ?';
    values.push(`%${genre}%`);
  }
  if (publication_date) {
    sql += ' AND publication_date = ?';
    values.push(publication_date);
  }

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error filtering books' });
    }
    res.status(200).json(result);
  });
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
