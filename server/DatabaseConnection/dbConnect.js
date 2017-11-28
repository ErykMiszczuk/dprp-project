"use strict";
// Required libraries
const Sequelize = require('sequelize');
const orm = new Sequelize('dprp-project', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

  })

orm
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
