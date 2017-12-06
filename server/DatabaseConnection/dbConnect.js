"use strict";
// Required libraries
const moment = require('moment');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const uberConfig = require('./uberConfig.js')
const sequelize = new Sequelize(uberConfig.database, uberConfig.user, uberConfig.password, {
  host: uberConfig.host,
  dialect: 'mysql',

  // Connection options
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // Options needed to create new tables
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci', 
    timestamps: true
  }

});

//Data models
const UserModel = sequelize.import(__dirname + '/../models/users.js')
const RoleModel = sequelize.import(__dirname + '/../models/roles.js');
const OperatorModel = sequelize.import(__dirname + '/../models/operators.js');
const IndustryModel = sequelize.import(__dirname + '/../models/industries.js');
const ClientModel = sequelize.import(__dirname + '/../models/clients.js');
const TradeNoteModel = sequelize.import(__dirname + '/../models/tradenotes.js');

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
 * @static 
 * @param {string} first_name 
 * @param {string} last_name 
 * @param {string} birth_date 
 * @param {string} usr_login 
 * @param {string} passwd
 * @memberof DBConnect
 */
  static createUser(first_name, last_name, birth_date, usr_login, passwd) {
    UserModel
    .findOrCreate({
      where: {login: usr_login},
      defaults: {firstName: first_name,
      lastName: last_name,
      birthDate: birth_date,
      password: passwd}
    })
    .spread((user, created) => {
      console.log(user.get({
        plain: true
      }))
      console.log(created)
      }
    )
  }

/**
 * Find user by his atributes
 * 
 * @static
 * @param {string} first_name 
 * @param {string} last_name 
 * @param {string} birth_date 
 * @param {string} usr_login 
 * @param {string} passwd
 * @memberof DBConnect
 */
  static findUser(first_name, last_name, birth_date, usr_login, passwd) {
      UserModel
      .find({
      where: {
        [Op.or]: [{firstName: first_name}, {lastName: last_name}, {birthDate: birth_date}, {login: usr_login}]
      },
      include: [{model: RoleModel}]
      }).then(
        user => console.log(user)
      )
    }
/**
 * CREATE TABLE based on models defined in DataModels
 * 
 * @static
 * @param {boolean} alter 
 * @memberof DBConnect
 */
  static createTablesStructure(alter, force) {
    this.createRelations();
    sequelize.sync({alter: alter, force: force})
    .then(
        res => {
          console.log(`[${new Date().toLocaleString()}] - Tables created.`);
          console.log(`[${new Date().toLocaleString()}] - Relations created.`);
          this.createRoles();
          console.log(`[${new Date().toLocaleString()}] - Roles created.`);
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
  static connectionTest() {
    sequelize
    .authenticate()
    .then(() => {
      console.log(`[${new Date().toLocaleString()}] - Connection has been established successfully.`);
    })
    .catch(err => {
      console.error(`[${new Date().toLocaleString()}] - Unable to connect to the database: ${err}`);
    });
  }

/**
 * Create relations beetween models
 * 
 * @static
 * @memberof DBConnect
 */
static createRelations() {
    // User model
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

    sequelize.sync({alter: true}).then(
      res => {
        console.log(`[${new Date().toLocaleString()}] - Relations created`);
      })
  }
/**
 * Create 3 basic roles normal user (digger), moderator (shadow), admin (baron)
 * 
 * @static
 * @memberof DBConnect
 */
static createRoles() {
    RoleModel
      .create({
        name: 'digger'
      }).then(
        RoleModel
          .create({
            name: 'shadow'
          }).then(
            RoleModel
              .create({
                name: 'baron'
              }).then(
                console.log(`[${new Date().toLocaleString()}] - Roles created`)
              )
          )
      )
  }

}

// Exported objects
module.exports = DBConnect;