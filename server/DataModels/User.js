"use strict";
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER, autoIncrement: true, allowNull: false
  },
  firstName: {
    type: Sequelize.STRING, allowNull: false
  },
  lastName: {
    type: Sequelize.STRING, allowNull: false
  },
  birthDate: {
    type: Sequelize.DATE, allowNull: false, validate: {isDate: true}
  },
  login: {
    type: Sequelize.STRING, allowNull: false
  },
  password: {
    type: Sequelize.STRING, allowNull: false
  },
  roleId: {
    type: Sequelize.INTEGER, allowNull: false, references: {model: 'Role', key: 'id'}
  },
  isDeleted: {
    type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
  }
});

module.exports = User;