const mysql = require('mysql');

// DB access
const uberConfig = require('./uberConfig.js');
let connection = mysql.createConnection(uberConfig);

connection.connect();

connection.query('SELECT * FROM users', (err, rows, fields) => {
    if (err) throw err
    console.log(`Data from server ${fields}`);
    tmptables = rows;
    console.table(rows);
})

connection.end();

module.exports = {};