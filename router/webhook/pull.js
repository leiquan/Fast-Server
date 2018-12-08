let router = require('koa-router')();
var exec = require('child_process').exec;

var cmdStr = 'git pull';

router.get('/', async function (ctx, next) {

  let msg = null;

  let run = async function (url, formData) {

    return new Promise((resolve, reject) => {

      exec(cmdStr, function (err, stdout, stderr) {

        if (err) {
          reject(err);
        } else {
          resolve(stdout);
        }

      });

    });

  };

  let res = await run();

  return ctx.return(0, 'webhook正常执行！', res);

});

module.exports = router.routes();
