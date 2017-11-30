"use strict";
// Required libraries
const express = require('express');
const app = express();
const body = require('body-parser');
const path = require('path');
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
  
app.get('/api/table', function(req, res) {
  tmptables = dbConnect();
  if(tmptables == null || tmptables == undefined) console.error(`Nie dostarczono danych do klienta ${tmptables}`);
    // res.sendFile(tmptables)
  res.status(200).send(JSON.stringify(tmptables));
})
  
app.get('/api/install', function(req, res) {
  con.createTablesStructure();
  res.status(200).send('Create tables');
})

app.get('/api/adduser', function(req, res) {
  con.createUser('Zenek', 'Bury', '1981-10-13', 'Bury', 'Bury');
  res.status(200).send('Add user');
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
