"use strict";
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tradenote', {
  id: {
    type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
  },
  content: {
    type: DataTypes.TEXT, allowNull: false
  },
  isDeleted: {
    type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
  }
})};