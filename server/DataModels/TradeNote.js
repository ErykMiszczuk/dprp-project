"use strict";
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tradenote', {
  id: {
    type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
  },
  content: {
    type: DataTypes.TEXT, allowNull: false
  },
  // clientId: {
  //   type: DataTypes.INTEGER, allowNull: false, references: {model: ClientModel ,key: 'id'}
  // },
  // userId: {
  //   type: DataTypes.INTEGER, allowNull: false, references: {model: UserModel ,key: 'id'}
  // },
  isDeleted: {
    type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
  }
})};