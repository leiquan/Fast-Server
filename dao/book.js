let Sequelize = require('sequelize');
let sequelize = require('../config/sequelize');
let path = require('path');
let env = require('../config/env');

let model = require('../models/' + path.basename(__filename, '.js'));
let commonDao = require('./__common')(model);

let dao = {
    // 演示事务
    sale_an_author_book: async function (author_id) {

        let book = model;
        let author = require('../models/author');

        return new Promise(async (resolve, reject) => {

            sequelize.transaction(async function () {

                Promise.all([

                    await book.increment('sale_count', { where: { author_id } }),
                    await author.increment('sale_count', { where: { id: author_id } })

                ]).then(function () {
                    // 提交事务
                    resolve('transaction success');
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