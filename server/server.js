// Wymagane biblioteki
const express = require('express');
const app = express();
const mysql = require('mysql');
const body = require('body-parser');

// Konfiguracja serwera
let port = 3000

app.get('/', (req, res) => {
  res.send('Test');
})

app.listen(port, () => {
  console.log(`App listening on ${port}`);
})
