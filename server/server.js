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
  
// REST API Routes
// Instalation
app.get('/api/install', function(req, res) {
  con.createTablesStructure(false, true);
  res.status(200).send('Create tables');
})

// Adding tables entries
app.get('/api/adduser', function(req, res) {
  con.createUser('Zenek', 'Bury', '1981-10-13', 'Bury', 'Bury')
    .then(
      succes => res.status(200).send(succes),
      err => res.status(404).send(err)
    )
});

app.get('/api/addnote', function(req, res) {
  con.createTradeNote('Taka tam notka')
    .then(
      succes => res.status(200).send(succes),
      err => res.status(404).send(err)
    )
});

app.get('/api/addoperator', function(req, res) {
  con.createOperator('Diego', 'Gonzales', 'diego@oldcamp.com', '996622456', 'Cień')
    .then(
      succes => res.status(200).send(succes),
      err => res.status(404).send(err)
    )
});

app.get('/api/addindustry', function(req, res) {
  con.createIndustryType('Kopalnia')
    .then(
      succes => res.status(200).send(succes),
      err => res.status(404).send(err)
    )
});

app.get('/api/addclient', function(req, res) {
  con.createClient('Old Camp Mine', '456763', 'Zamkowa', 'Khorinis')
    .then(
      succes => res.status(200).send(succes),
      err => res.status(404).send(err)
    )
});

// Find elements in table
app.get('/api/finduser', function(req, res) {
  con.findUser('Zenek', 'Bury', '1981-10-13', 'Bury', 'Bury')
    .then(
      succes => res.status(200).send(succes),
      err => res.status(404).send(err)
    )
  }
);

// Get all elements from table
app.get('/api/getusers', function(req, res) {
  con.getUsers().then(
    succes => res.status(200).send(succes),
    err => res.status(404).send(err)
  )
});

app.get('/api/getnotes', function(req, res) {
  con.getTradeNotes().then(
    succes => res.status(200).send(succes),
    err => res.status(404).send(err)
  )
});

app.get('/api/getroles', function(req, res) {
  con.getRoles().then(
    succes => res.status(200).send(succes),
    err => res.status(404).send(err)
  )
});

app.get('/api/getoperators', function(req, res) {
  con.getOperators().then(
    succes => res.status(200).send(succes),
    err => res.status(404).send(err)
  )
});

app.get('/api/getindustries', function(req, res) {
  con.getIndustries().then(
    succes => res.status(200).send(succes),
    err => res.status(404).send(err)
  )
});

app.get('/api/getclients', function(req, res) {
  con.getClients().then(
    succes => res.status(200).send(succes),
    err => res.status(404).send(err)
  )
});



















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
