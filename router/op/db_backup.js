let router = require('koa-router')();
let mysqlDump = require('mysqldump');

let env = require('../../config/env');
let { timestamp } = require('../../utils/lib/time');

router.get('/', async function (ctx, next) {

    mysqlDump({
        host: env.host,
        user: env.username,
        password: env.password,
        database: 'lehui',
        dest: './backup/' + timestamp() + '-db.sql'
    }, function (err) {
        // create data.sql file;
    })

    ctx.body = {
        code: 0,
        msg: '数据库备份成功',
        data: null
    };

});

module.exports = router.routes();
