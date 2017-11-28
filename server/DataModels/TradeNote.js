"use strict";
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,
  },
  content: {
    type: Sequelize.TEXT, allowNull: false
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

module.exports = User;