"use strict";
// Required libraries
const express = require('express');
const app = express();
const body = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const dbConnect = require('./DatabaseConnection/dbConnect.js');

const con = dbConnect;

// Working directory path
const __dirpath = path.resolve();
  
// Path to client directory
let servdir = path.dirname(__dirname);
let clientdir = `${servdir}/client/`
  
// Body-parser configuration
app.use(body.urlencoded({extended: true}));
app.use(body.json());

//Loging middleware
app.use(morgan('dev'));
 
// Server configuration
let port = 3000;
app.set('superSecret', 'superSecret');

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
app.post('/api/adduser', function(req, res) {
  con.createUser(req.body.name, req.body.lastname, req.body.dateOfBirth, req.body.login, bcrypt.hashSync(req.body.password, 8))
    .then(
      succes => res.status(200).send(succes),
      err => res.status(404).send(err)
    )
});

app.post('/api/addnote', function(req, res) {
  con.createTradeNote(req.body.note)
    .then(
      succes => res.status(200).send(succes),
      err => res.status(404).send(err)
    )
});

app.post('/api/addoperator', function(req, res) {
  con.createOperator(req.body.name, req.body.lastname, req.body.email, req.body.number, req.body.position)
    .then(
      succes => res.status(200).send(succes),
      err => res.status(404).send(err)
    )
});

app.post('/api/addindustry', function(req, res) {
  con.createIndustryType(req.body.industryType)
    .then(
      succes => res.status(200).send(succes),
      err => res.status(404).send(err)
    )
});

app.post('/api/addclient', function(req, res) {
  con.createClient(req.body.clientName, req.body.nip, req.body.adress, req.body.city)
    .then(
      succes => res.status(200).send(succes),
      err => res.status(404).send(err)
    )
});

// Find elements in table
app.post('/api/finduser', function(req, res) {
  con.findUser('Bury')
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

app.post('/auth', function(req, res) {
  con.findUser(req.body.login)
    .then(
      resolve => {
        bcrypt.compare(req.body.password, resolve.password, function(err, good) {
          if (good == true) {
            const payload = {
              admin: resolve.admin 
            };
            let token = jwt.sign(payload, app.get('superSecret'), {
              expiresIn: '2 days' // expires in 24 hours
            });
            // return the information including token as JSON
            res.status(200).json({
              success: true,
              message: 'Enjoy your token!',
              token: token
            });
          }
          else if (good == false) {
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          }
        })
      },
    reject => res.status(404).json({success: false, message: 'Authentication failed. User not found.'})
    )
})

/**
 * Starting server
 */
app.listen(port, () => {
  console.log(`App listening on ${port}`);
  console.log(clientdir);
})
