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
    type: DataTypes.STRING, allowNull: false, validate: {isNumeric: true}
  },
  // industryId: {
  //   type: DataTypes.INTEGER, allowNull: false, references: {model: IndustryModel ,key: 'id'}
  // },
  address: {
    type: DataTypes.STRING, allowNull: false
  },
  city: {
    type: DataTypes.STRING, allowNull: false
  },
  // userId: {
  //   type: DataTypes.INTEGER, allowNull: false, references: {model: UserModel ,key: 'id'}
  // },
  isDeleted: {
    type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
  }
})};