const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'books_db'
});

connection.query('SELECT * FROM biographies', (err, data) => {
  if (err) return console.log(err);

  console.log(data);
});