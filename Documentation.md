
### 3. **Documentation**:
This section covers the **usage instructions**, any **design decisions**, and **challenges** you faced while developing the project.

#### Example `Documentation.md`:
```markdown
# Documentation

## How to Use the System
1. **Adding a New Book**:
   - Open the form on the main page.
   - Fill in the required fields (Title, Author, Genre, Publication Date, ISBN).
   - Click "Add Book" to store the book in the database.

2. **Filtering Books**:
   - Use the filter form to search for books by title, author, genre, or publication date.
   - The filtered results will be displayed below the form.

3. **Displaying Filtered Results**:
   - After applying a filter, the filtered books will be shown in a **table format**.
   - The table includes the following columns:
     - Book ID
     - Title
     - Author
     - Genre
     - Publication Date
     - ISBN

4. **Exporting Data**:
   - Click the "Export Books" button to download the book data in JSON format.

## Design Decisions

1. **Database**:
   - Chose MySQL as it is a widely used relational database with solid support for structured queries and easy integration with Node.js.

2. **Backend**:
   - Built with Express.js for ease of routing and handling requests.
   - Used `mysql2` library for interaction with MySQL, as it provides a better API for promises and error handling.

3. **Front-End**:
   - Chose plain HTML, CSS, and vanilla JavaScript to keep the project simple and easy to follow.

4. **Filtering**:
   - Implemented on the server-side to reduce load on the front-end and make queries efficient.
   - The results are dynamically displayed after filtering.

## Challenges Faced

1. **Database Connection**:
   - Initially, there were issues connecting to MySQL due to incorrect configurations, which was resolved by carefully checking the `mysql2` setup.

2. **Validation**:
   - Ensured proper validation on both client-side (e.g., non-empty fields, correct ISBN format) and server-side for secure data entry.

3. **Export Functionality**:
   - Had to decide between CSV and JSON for export. JSON was chosen for simplicity and to focus on core functionality.
