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
  // clientId: {
  //   type: DataTypes.INTEGER, allowNull: false//, references: {model: 'client' ,key: 'id'}
  // },
  // userId: {
  //   type: DataTypes.INTEGER, allowNull: false//, references: {model: 'user' ,key: 'id'}
  // },
  isDeleted: {
    type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
  }
})};