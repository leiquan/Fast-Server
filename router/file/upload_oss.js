let router = require('koa-router')();
let path = require('path');
let fs = require('fs');
let os = require('os');
let co = require('co');
let OSS = require('ali-oss');

let { oss } = require('../../config/env');


let client = new OSS(oss);

let { timestamp, datestamp } = require('../../lib/time');

let request = require('request');

router.post('/', async function (ctx, next) {

    const file = ctx.request.body.files.file;

    let date = datestamp();

    let pn = 'upload/' + date + '/' + parseInt(Math.random() * (9999999 - 1000000 + 1) + 1000, 10).toString() + path.extname(file.name);
    let stream = fs.createReadStream(file.path);


    let res = await new Promise((resolve, reject) => {

        co(function* () {
            let result = yield client.putStream(pn, stream);
            resolve(result);
        }).catch(function (err) {
            reject(err);
        });

    });

    if (res.res.statusCode == 200) {

        ctx.body = {
            code: 0,
            msg: '',
            data: {
                upload_name: file.name,
                name: res.name,
                cover_url: res.url,
                url: res.url
            }
          };

    } else {

        ctx.body = {
            code: res.res.statusCode,
            msg: '上传失败，状态码：' + res.res.statusCode,
            data: null
        };
    }

});

module.exports = router.routes();
