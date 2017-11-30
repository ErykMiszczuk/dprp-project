"use strict";
// Required libraries
const moment = require('moment');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('dprp-project', 'root', '',{
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci', 
    timestamps: true
  }

});

//Data models
const UserModel = sequelize.import(__dirname + '/../DataModels/User.js')
const RoleModel = sequelize.import(__dirname + '/../DataModels/Role.js');
const OperatorModel = sequelize.import(__dirname + '/../DataModels/Operator.js');
const IndustryModel = sequelize.import(__dirname + '/../DataModels/Industry.js');
const ClientModel = sequelize.import(__dirname + '/../DataModels/Client.js');
const TradeNoteModel = sequelize.import(__dirname + '/../DataModels/TradeNote.js');

/**
 * Provide database manipulation API to server
 * 
 * @class DBConnect
 */
class DBConnect {
/**
 * Create new user in database, or return information that user exist in
 * database, useful for login
 * 
 * @param {string} first_name 
 * @param {string} last_name 
 * @param {string} birth_date 
 * @param {string} usr_login 
 * @param {string} passwd
 * @static 
 * @memberof DBConnect
 */
  static createUser(first_name, last_name, birth_date, usr_login, passwd) {
    UserModel
      .findOrCreate({
        where: [
          {firstName: first_name}, 
            {lastName: last_name},
            {birthDate: birth_date},
            {login: usr_login},
            {password: passwd}
        ],
        defaults: [
          {firstName: first_name},
          {lastName: last_name},
          {birthDate: birth_date},
          {login: usr_login},
          {password: passwd}
        ],
        }
      // .create({
      //   firstName: first_name,
      //   lastName: last_name,
      //   birthDate: birth_date,
      //   login: usr_login,
      //   password: passwd
      // })
    // }
      // )
    )
    console.log(`[${new Date().toLocaleString()}] - User created.`);
    }
/**
 * CREATE TABLE based on models defined in DataModels
 * 
 * @static
 * @memberof DBConnect
 */
  static createTablesStructure() {
    sequelize.sync({alter: true}).then(
        res => {
          console.log(`[${new Date().toLocaleString()}] - Tables created.`);
          this.createRelations();
        },
        rej => console.error(`[${new Date().toLocaleString()}] - Table not created.`)
      )
  }

/**
 *  Function that test connection to database
 * 
 * @static
 * @memberof DBConnect
 */
  // static connectionTest() {
  //   sequelize
  //   .authenticate()
  //   .then(() => {
  //     console.log(`[${new Date().toLocaleString()}] - Connection has been established successfully.`);
  //   })
  //   .catch(err => {
  //     console.error(`[${new Date().toLocaleString()}] - Unable to connect to the database: ${err}`);
  //   });
  // }

/**
 * Create relations beetween models
 * 
 * @static
 * @memberof DBConnect
 */
static createRelations() {
    RoleModel.hasMany(UserModel);
    UserModel.belongsTo(RoleModel);
    //Trade note model
    ClientModel.hasMany(TradeNoteModel);
    TradeNoteModel.belongsTo(ClientModel);

    UserModel.hasMany(TradeNoteModel);
    TradeNoteModel.belongsTo(UserModel);
    //Client model
    IndustryModel.hasMany(ClientModel);
    ClientModel.belongsTo(IndustryModel);

    UserModel.hasMany(ClientModel);
    ClientModel.belongsTo(UserModel);
    //Operator model
    ClientModel.hasMany(OperatorModel);
    OperatorModel.belongsTo(ClientModel);

    UserModel.hasMany(OperatorModel);
    OperatorModel.belongsTo(UserModel);

    // RoleModel.hasMany(UserModel, {foreignKey: 'id', sourceKey: 'roleId'});
    // UserModel.belongsTo(RoleModel, {foreignKey: 'id', targetKey: 'roleId'});
    // IndustryModel.hasMany(ClientModel, {foreignKey: 'id', sourceKey: 'industryId'});
    // ClientModel.belongsTo(IndustryModel, {foreignKey: 'id', targetKey: 'industryId'});
    // UserModel.hasMany(ClientModel, {foreignKey: 'id', sourceKey: 'userId'});
    // ClientModel.belongsTo(UserModel, {foreignKey: 'id', targetKey: 'userId'});
    sequelize.sync({alter: true}).then(
      res => {
        console.log(`[${new Date().toLocaleString()}] - Relations created`);
      })
  }

}

// Exported objects
module.exports = DBConnect;