/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operators', {
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
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    position: {
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
    clientId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'clients',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'operators'
  });
};
