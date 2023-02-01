let Sequelize = require('sequelize');
let path = require('path');
let env = require('../config/env');

let model = require('../models/' + path.basename(__filename, '.js'));
let commonDao = require('./__common')(model);

// 这里是自定义Dao方法
let dao = {
}

module.exports = {
    ...commonDao,
    ...dao
};