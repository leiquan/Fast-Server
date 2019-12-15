let Sequelize = require('sequelize');
let path = require('path');
let env = require('../config/env');

let model = require('../models/' + path.basename(__filename, '.js'));
let commonDao = require('./__common')(model);

// 这里是自定义Dao方法
let dao = {
    // 关联查询，请仔细研究这里的写法
    list_include_books: async function (whereJson = {}, include = [], page = 1, pageSize = 10) {
        let data = await model.findAndCountAll({
            logging: env.logging,
            where: whereJson,
            offset: pageSize * (page - 1),
            limit: pageSize,
            include: [
                {
                    association: model.hasMany(require('../models/book'),
                        {
                            foreignKey: 'author_id', // book表中的键 与 
                            targetKey: 'id' // author表中的键 对应
                        }),
                    attributes: ['id', 'title', 'description']
                },
            ]
        });
        return data;
    }
}

module.exports = {
    ...commonDao,
    ...dao
};