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

  name: {
    type: sequelize.Sequelize.STRING(32),
    comment: '作者姓名'
  },

  description: {
    type: sequelize.Sequelize.TEXT,
    comment: '作者描述'
  },

  sale_count: {
    type: sequelize.Sequelize.INTEGER,
    comment: '作者售卖的书籍数量'
  }
  
}, {
    underscored: true,
    freezeTableName: true,
    paranoid: true
  });

module.exports = model;
