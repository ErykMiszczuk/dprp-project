"use strict";
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('operator', {
  id: {
    type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING, allowNull: false
  },
  lastName: {
    type: DataTypes.STRING, allowNull: false
  },
  email: {
    type: DataTypes.STRING, validate: {isEmail: true}
  },
  phoneNumber: {
    type: DataTypes.STRING, allowNull: false
  },
  position: {
    type: DataTypes.STRING, allowNull: false
  },
  isDeleted: {
    type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
  }
})};