let Sequelize = require('sequelize');
let path = require('path');
let env = require('../config/env');

module.exports = function (model) {

    // 这里是公用的dao方法
    return {

        add: async function (addJson) {
            let data = await model.create(addJson,
                {
                    logging: env.logging,
                }
            );
            return data;
        },

        delete: async function (id = null) {
            let data = await model.destroy({
                where: {
                    id: id
                },
                logging: env.logging,
            });
            return data;
        },

        update: async function (updateJson = {}, whereJson = {}) {
            let data = await model.update(updateJson, {
                where: whereJson,
                logging: env.logging,
            });
            return data;
        },

        list: async function (whereJson = {}, page = 1, pageSize = 10) {
            let data = await model.findAndCountAll({
                logging: env.logging,
                where: whereJson,
                offset: pageSize * (page - 1),
                limit: pageSize
            });
            return data;
        },

        all: async function (whereJson = {}) {
            let data = await model.findAndCountAll({
                logging: env.logging,
                where: whereJson
            });
            return data;
        },

        sum: async function (cloum, whereJson) {
            let data = await model.sum(cloum, {
                where: whereJson
            });
            return data;
        },

        count: async function () {
            let data = await model.count({
                logging: env.logging
            });
            return data;
        },

        increment: async function (cloumArray = [], whereJson = {}, by = 1) {
            let data = await model.increment(cloumArray, {
                by: by,
                where: whereJson
            });
            return data;
        },

        // 一带一
        list_with: async function (include = {}, key = {}, whereJson = {}, page = 1, pageSize = 10) {
            let data = await model.findAndCountAll({
                logging: env.logging,
                where: whereJson,
                offset: pageSize * (page - 1),
                limit: pageSize,
                include: [
                    {
                        association: model.hasOne(require('../models/' + include.table),
                            {
                                foreignKey: key.foreignKey,
                                targetKey: key.targetKey
                            }),
                        attributes: include.attributes// ['id', 'name', 'description']
                    },
                ]
            });
            return data;
        },
        
        // 一带多
        list_include: async function (include = {}, key = {}, whereJson = {}, page = 1, pageSize = 10) {
            let data = await model.findAndCountAll({
                logging: env.logging,
                where: whereJson,
                offset: pageSize * (page - 1),
                limit: pageSize,
                include: [
                    {
                        association: model.hasMany(require('../models/' + include.table),
                            {
                                foreignKey: key.foreignKey,
                                targetKey: key.targetKey
                            }),
                        attributes: include.attributes
                    },
                ]
            });
            return data;
        }
    };

};