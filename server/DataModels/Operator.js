"use strict";
const Operator = sequelize.define('operator', {
  id: {
    type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,
  },
  firstName: {
    type: Sequelize.STRING, allowNull: false
  },
  lastName: {
    type: Sequelize.STRING, allowNull: false
  },
  email: {
    type: Sequelize.STRING, validate: {isEmail: true}
  },
  phoneNumber: {
    type: Sequelize.STRING, allowNull: false
  },
  position: {
    type: Sequelize.STRING, allowNull: false
  },
  clientId: {
    type: Sequelize.INTEGER, allowNull: false, references: {model: 'Client', key: 'id'}
  },
  userId: {
    type: Sequelize.INTEGER, allowNull: false, references: {model: 'User', key: 'id'}
  },
  isDeleted: {
    type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
  }
});

module.exports = Operator;