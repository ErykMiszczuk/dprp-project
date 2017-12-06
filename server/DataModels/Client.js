"use strict";
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('client', {
  id: {
    type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
  },
  clientName: {
    type: DataTypes.STRING, allowNull: false
  },
  nip: {
    type: DataTypes.STRING, allowNull: false, validate: {isNumeric: true}, unique: true
  },
  address: {
    type: DataTypes.STRING, allowNull: false
  },
  city: {
    type: DataTypes.STRING, allowNull: false
  },
  isDeleted: {
    type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
  }
})};