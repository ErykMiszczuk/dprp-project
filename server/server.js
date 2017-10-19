"use strict";
// Required libraries
const express = require('express');
const app = express();
const mysql = require('mysql');
const body = require('body-parser');
const path = require('path');

// Working directory path
const __dirpath = path.resolve();

// Path to client directory
let servdir = path.dirname(__dirname);
let clientdir = `${servdir}/client/`

// Body-parser configuration
app.use(body.urlencoded({extended: true}));

// Server configuration
let port = 3000;

// DB access
const uberConfig = require('./uberConfig.js');
let connection = mysql.createConnection(uberConfig);

// Temporary variables
let tmptables;

// Static files
app.use(express.static(path.join(__dirname+'/../', 'client')));

connection.connect();

connection.query('SELECT * FROM users', (err, rows, fields) => {
    if (err) throw err
    console.log(`Data from server ${fields}`);
    tmptables = rows;
    console.table(rows);
})

connection.end();

// app.get('/', (req, res) => {
//   res.sendFile(clientdir+'index.html')
// })

app.get('/api/table', function(req, res) {
  res.status(200).send(tmptables)


  // Todo.find({}, function(err, todos) {
  //   res.status(200).send(todos);
  // })


})

app.get('/api/todos/:id', function(req, res) {
  res.status(200).send(todos.find(function(todo){
    return todo.id == req.params.id
  }))
  // Todo.find({_id: req.params.id}, function(err, todos) {
  //   res.status(200).send(todos);
  // })
})










app.listen(port, () => {
  console.log(`App listening on ${port}`);
  console.log(clientdir);
})
