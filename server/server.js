"use strict";
// Required libraries
const express = require('express');
const app = express();
const body = require('body-parser');
const path = require('path');
const bcrypt = require('bcryptjs');
// const await = require('await');

const dbConnect = require('./DatabaseConnection/dbConnect.js');

const con = dbConnect;

// Working directory path
const __dirpath = path.resolve();
  
// Path to client directory
let servdir = path.dirname(__dirname);
let clientdir = `${servdir}/client/`
  
// Body-parser configuration
app.use(body.urlencoded({extended: true}));
 
// Server configuration
let port = 3000;
  
// Temporary variables
let tmptables;
  
// Static files
app.use(express.static(path.join(__dirname+'/../', 'client')));

// Routes
app.get('/api/install', function(req, res) {
  con.createTablesStructure(false, true);
  res.status(200).send('Create tables');
})

app.get('/api/adduser', function(req, res) {
  con.createUser('Sherlock', 'Holmes', '1981-10-13', 'Holmes', bcrypt.hashSync('Holmes', 7));
  res.status(200).send('Add user');
})

app.get('/api/finduser', function(req, res) {
  con.findUser('Zenek', 'Bury', '1981-10-13', 'Bury');
  res.status(200).send('Add user');
})

app.get('/api/allusers', function(req, res) {
  con.getUsers();
  res.status(200).send('All users');
})























// app.get('/', (req, res) => {
//   res.sendFile(clientdir+'index.html')
// })

// app.get('/api/todos/:id', function(req, res) {
//   res.status(200).send(todos.find(function(todo){
//     return todo.id == req.params.id
//   }))
//   Todo.find({_id: req.params.id}, function(err, todos) {
//     res.status(200).send(todos);
//   })
// })










app.listen(port, () => {
  console.log(`App listening on ${port}`);
  console.log(clientdir);
})
