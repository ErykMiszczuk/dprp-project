// Wymagane biblioteki
const express = require('express');
const app = express();
const mysql = require('mysql');
const body = require('body-parser');

// Konfiguracja serwera
let port = 3000;

// Dostęp do bazy danych
const uberConfig = require('./uberConfig.js');
let connection = mysql.createConnection(uberConfig);

mysql.connect();

mysql.query('SELECT * FROM users')

app.get('/', (req, res) => {
  res.send('Test');
})

app.listen(port, () => {
  console.log(`App listening on ${port}`);
})
