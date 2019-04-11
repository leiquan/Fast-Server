var path = require("path");
let sequelize = require('../config/sequelize');

const modelName = path.basename(__filename, '.js');

const model = sequelize.define(modelName, {

  id: {
    type: sequelize.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: '自增ID'
  },

  content: {
    type: sequelize.Sequelize.TEXT,
    comment: '评论内容'
  },

  user_id: {
    type: sequelize.Sequelize.INTEGER,
    comment: '评论者ID'
  },

  article_id: {
    type: sequelize.Sequelize.INTEGER,
    comment: '评论文章ID'
  }
  
}, {
    underscored: true,
    freezeTableName: true,
    paranoid: true
  });

module.exports = model;
