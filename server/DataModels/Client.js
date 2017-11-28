"use strict";
const Client = sequelize.define('client', {
  id: {
    type: Sequelize.STRING, allowNull: false, autoIncrement: true,
  },
  clientName: {
    type: Sequelize.STRING, allowNull: false
  },
  nip: {
    type: Sequelize.STRING, allowNull: false, validate: {isNumeric: true}
  },
  industryId: {
    type: Sequelize.INTEGER, allowNull: false, references: {model: 'Industry', key: 'id'}
  },
  address: {
    type: Sequelize.STRING, allowNull: false
  },
  city: {
    type: Sequelize.STRING, allowNull: false
  },
  userId: {
    type: Sequelize.STRING, allowNull: false, references: {model: 'User', key: 'id'}
  },
  isDeleted: {
    type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
  }
});

module.exports = Client;