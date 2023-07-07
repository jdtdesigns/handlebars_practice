const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3333;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'project_tracker_db',
});

app.get('/', (clientReq, serverRes) => {

});

app.listen(PORT, () => console.log('Server started...'));







