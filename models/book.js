let path = require("path");
let sequelize = require('../config/sequelize');

const modelName = path.basename(__filename, '.js');

const model = sequelize.define(modelName, {

  id: {
    type: sequelize.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: '自增ID'
  },

  title: {
    type: sequelize.Sequelize.STRING(32),
    comment: '书籍标题'
  },

  author_id: {
    type: sequelize.Sequelize.INTEGER,
    comment: '书籍作者ID'
  },

  description: {
    type: sequelize.Sequelize.TEXT,
    comment: '书籍描述'
  },

  price: {
    type: sequelize.Sequelize.DECIMAL(5, 2),
    comment: '书籍价格'
  },

  sale_count: {
    type: sequelize.Sequelize.INTEGER,
    comment: '销售数量',
    defaultValue: 0
  },

  status: {
    type: sequelize.Sequelize.INTEGER,
    comment: '0为默认状态; 正数为各种有效状态;',
    defaultValue: 0
  }
  
}, {
    underscored: true,
    freezeTableName: true,
    paranoid: true
  });

module.exports = model;
