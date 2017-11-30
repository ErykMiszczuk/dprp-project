"use strict";
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('industry', {
  id: {
    type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
  },
  industryType: {
    type: DataTypes.STRING, allowNull: false
  }
})};