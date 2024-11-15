const db = require("./connection.js");

db.query("SELECT * FROM books;")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));