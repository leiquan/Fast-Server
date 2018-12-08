let router = require('koa-router')();
let path = require('path');
let fs = require('fs');
let os = require('os');
var co = require('co');
var OSS = require('ali-oss');

let { oss } = require('../../config/env');


var client = new OSS(oss);

let { timestamp, datestamp } = require('../../utils/lib/time');

let request = require('request');

router.post('/', async function (ctx, next) {

    const file = ctx.request.body.files.file;

    let date = datestamp();

    let pn = 'upload/' + date + '/' + parseInt(Math.random() * (9999999 - 1000000 + 1) + 1000, 10).toString() + path.extname(file.name);
    var stream = fs.createReadStream(file.path);


    let res = await new Promise((resolve, reject) => {

        co(function* () {
            var result = yield client.putStream(pn, stream);
            resolve(result);
        }).catch(function (err) {
            reject(err);
        });

    });

    if (res.res.statusCode == 200) {

        return ctx.return(0, '', {
            upload_name: file.name,
            name: res.name,
            cover_url: res.url,
            url: res.url
        });

    } else {

        return ctx.return(res.res.statusCode, '上传失败，状态码：' + res.res.statusCode, null);
    }

});

module.exports = router.routes();
