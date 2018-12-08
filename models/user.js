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

  phone: {
    type: sequelize.Sequelize.BIGINT,
    comment: '手机号'
  },

  verify_code: {
    type: sequelize.Sequelize.INTEGER,
    comment: '手机号验证码'
  },

  verify_time: {
    type: sequelize.Sequelize.DATE,
    comment: '手机号验证码发送时间'
  },

  username: {
    type: sequelize.Sequelize.TEXT,
    comment: '用户名'
  },

  password: {
    type: sequelize.Sequelize.STRING,
    comment: '密码'
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
