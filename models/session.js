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

  session_id: {
    type: sequelize.Sequelize.TEXT,
    comment: 'session的id，和前端浏览器的cookie一致'
  },

  session: {
    type: sequelize.Sequelize.TEXT,
    comment: 'session的内容'
  }
}, {
    underscored: true,
    freezeTableName: true
  });

module.exports = model;
