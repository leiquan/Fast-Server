let Sequelize = require('sequelize');
let sequelize = require('../config/sequelize');
let path = require('path');
let env = require('../config/env');

let model = require('../models/' + path.basename(__filename, '.js'));
let commonDao = require('./__common')(model);

let dao = {
    
}

module.exports = {
    ...commonDao,
    ...dao
};