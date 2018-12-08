var path = require("path");
let sequelize = require('../config/sequelize');

const modelName = path.basename(__filename, '.js');

const model = sequelize.define(modelName, {

  id: {
    type: sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    comment: '自增ID'
  },

  key: {
    type: sequelize.Sequelize.TEXT,
    comment: 'log的键名'
  },

  value: {
    type: sequelize.Sequelize.TEXT,
    comment: 'log的值',
    paranoid: true
  }

}, {
    underscored: true,
    freezeTableName: true
  });

module.exports = model;
