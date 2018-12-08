let Sequelize = require('sequelize');
let path = require('path');
let env = require('../config/env');

let modelName = path.basename(__filename, '.js');
let model = require('../models/' + modelName);

let dao = {

    // 增
    add: async function (addJson) {
        let data = await model.create(addJson,
            {
                logging: env.logging,
            }
        );
        return data;
    },

    // 删
    delete: async function (id = null) {
        let data = await model.destroy({
            where: {
                id: id
            },
            logging: env.logging,
        });
        return data;
    },

    // 改
    update: async function (updateJson = {}, whereJson = {}) {
        let data = await model.update(updateJson, {
            where: whereJson,
            logging: env.logging,
        });
        return data;
    },

    // 查
    list: async function (whereJson = {}, page = 1, pageSize = 10) {
        let data = await model.findAndCountAll({
            logging: env.logging,
            where: whereJson,
            offset: pageSize * (page - 1),
            limit: pageSize
        });
        return data;
    },

    // 查全部
    all: async function (whereJson = {}) {
        let data = await model.findAndCountAll({
            logging: env.logging,
            where: whereJson
        });
        return data;
    },

    // 求和
    sum: async function (cloum, whereJson) {
        let data = await model.sum(cloum, {
            where: whereJson
        });
        return data;
    },

    // 计数
    count: async function () {
        let data = await model.count({
            logging: env.logging
        });
        return data;
    },

    // 自增
    increment: async function (cloumArray = [], whereJson = {}, by = 1) {

        let data = await model.increment(cloumArray, {
            by: by,
            where: whereJson
        });

        return data;
    }
}


module.exports = dao;