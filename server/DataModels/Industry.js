"use strict";
const Industry = sequelize.define('industry', {
  id: {
    type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,
  },
  industryType: {
    type: Sequelize.STRING, allowNull: false
  }
});

module.exports = Industry;