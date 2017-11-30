"use strict";
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING, allowNull: false
    },
    lastName: {
      type: DataTypes.STRING, allowNull: false
    },
    birthDate: {
      type: DataTypes.DATEONLY, allowNull: false, validate: {isDate: true}
    },
    login: {
      type: DataTypes.STRING, allowNull: false
    },
    password: {
      type: DataTypes.STRING, allowNull: false
    },
    // roleId: {
    //   type: DataTypes.INTEGER, allowNull: true
    // },
    isDeleted: {
      type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
    }
  })
}

