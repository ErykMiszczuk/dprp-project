"use strict";
// Required libraries
const Sequelize = require('sequelize');

//Data models
const UserModel = require('../DataModels/User.js');
const TradeNoteModel = require('../DataModels/TradeNote.js');
const RoleModel = require('../DataModels/Role.js');
const OperatorModel = require('../DataModels/Operator.js');
const IndustryModel = require('../DataModels/Industry.js');
const ClientModel = require('../DataModels/Client.js');

class DBConnect {
  constructor() {
    this.orm = new Sequelize('dprp-project', 'root', '',{
      host: 'localhost',
      dialect: 'mysql',
    
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
  
    });
  }

  connectionTest() {
    this.orm
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  }
}

module.exports = DBConnect;