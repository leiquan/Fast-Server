let Sequelize = require('sequelize');
let sequelize = require('../config/sequelize');
let path = require('path');
let env = require('../config/env');

let model = require('../models/' + path.basename(__filename, '.js'));
let commonDao = require('./__common')(model);

let dao = {

    // 关联查询，请仔细研究这里的写法
    list_with_author: async function (whereJson = {}, page = 1, pageSize = 10) {
        let data = await model.findAndCountAll({
            logging: env.logging,
            where: whereJson,
            offset: pageSize * (page - 1),
            limit: pageSize,
            include: [
                {
                    association: model.hasOne(require('../models/author'),
                        {
                            foreignKey: 'id', // author 表中的键 与 
                            targetKey: 'author_id' // book 表中的键 对应
                        }),
                    attributes: ['id', 'name', 'description']
                },
            ]
        });
        return data;
    },

    // 事务
    sale_an_author_book: async function (author_id) {

        let book = model;
        let author = require('../models/author');

        return new Promise(async (resolve, reject) => {

            sequelize.transaction(async function () {

                Promise.all([

                    await book.increment('sae_count', { where: { author_id } }),
                    await author.increment('sale_count', { where: { id: author_id } })

                ]).then(function () {
                    // 提交事务
                    resolve('success');
                });

            })
            .catch(function (error) {
                // 回滚事务

                reject(error);
            });

        });

    },

}

module.exports = {
    ...commonDao,
    ...dao
};