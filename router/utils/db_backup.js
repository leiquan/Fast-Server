let router = require('koa-router')();
var mysqlDump = require('mysqldump');

var env = require('../../config/env');
var { timestamp } = require('../../utils/lib/time');

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

    return ctx.return(0, '数据库备份成功', null);

});

module.exports = router.routes();
