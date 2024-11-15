const { Pool } = require("pg");

const db = new Pool({
  host: 'localhost',
  user: 'root',
  port: 5432, 
  database: 'example_bookshop',
});

const getAllBooks = async () => {
  try {
    const result = await db.query("SELECT * FROM books WHERE identifier = 7;");
    console.log(result.rows);
  } catch (err) {
    console.log( err);
  } finally {
    await db.end(); 
  }
};

getAllBooks();

/* const getAllBooks = async () => {
    const result = await db.query("SELECT * FROM books;");
    return result.rows
}

getAllBooks().then((books) => {
    console.log(books)
}) */


