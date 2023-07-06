const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3333;

const isProduction = process.env.PORT;
const connectionString = 'mysql://ti3an634a6rwkaha:wlyr6sfhsoa3u4f7@uzb4o9e2oe257glt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jlepkhxiycgsz5i2';

const connection = mysql.createConnection(isProduction ? connectionString : {
  host: 'localhost',
  user: 'root',
  database: 'books_db',
  multipleStatements: true
});

app.get('/', (clientReq, serverRes) => {
  const tableSQL = `
  DROP TABLE IF EXISTS biographies;

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
  `;

  connection.query(tableSQL, (err) => {
    if (err) throw err;

    connection.query('SELECT * FROM biographies', (err, data) => {
      if (err) return console.log(err);

      serverRes.send(data);
    });
  });
});

app.listen(PORT, () => console.log('Server started...'));







