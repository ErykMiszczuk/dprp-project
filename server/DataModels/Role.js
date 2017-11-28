"use strict";
const Role = sequelize.define('role', {
  id: {
    type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING, allowNull: false
  }
});

module.exports = Role;