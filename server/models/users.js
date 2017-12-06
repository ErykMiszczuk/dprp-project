/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isDeleted: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    roleId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    tableName: 'users'
  });
};
