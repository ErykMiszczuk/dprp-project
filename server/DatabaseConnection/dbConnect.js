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

/**
 * Provide database manipulation API to server
 * 
 * @class DBConnect
 */
class DBConnect {
  /**
   * Create instance of DBConnect
   * @memberof DBConnect
   */
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
/**
 *  Function that test connection to database
 * 
 * @memberof DBConnect
 */
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

// Exported objects
module.exports = DBConnect;