let path = require("path");
let sequelize = require('../config/sequelize');

const modelName = path.basename(__filename, '.js');

const model = sequelize.define(modelName, {

  id: {
    type: sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    comment: '自增ID'
  },

  title: {
    type: sequelize.Sequelize.TEXT,
    comment: '标题'
  },

  author: {
    type: sequelize.Sequelize.TEXT,
    comment: '作者'
  },
  price: {
    type: sequelize.Sequelize.TEXT,
    comment: '价格'
  },
  jie: {
    type: sequelize.Sequelize.TEXT,
    comment: '节数'
  },
  buy: {
    type: sequelize.Sequelize.TEXT,
    comment: '购买人数'
  },
  review: {
    type: sequelize.Sequelize.TEXT,
    comment: '评论数'
  }

}, {
    underscored: true,
    freezeTableName: true,
    paranoid: true
  });

module.exports = model;
