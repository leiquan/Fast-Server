let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');

let daoName = path.basename(__dirname);
let dao = require('../../dao/' + daoName);

let md5 = require('../../utils/lib/md5');

router.post('/', async function (ctx, next) {

  let post = ctx.request.body;

  let code = -1;
  let msg = null;
  let data = null;

  let res_user = await dao.list({
    phone: post.phone,
    password: md5(post.password) // 测试密码11111，phone 为8888， 加密方式为：32位小写 MD5
  });

  if (res_user.count > 0) {
    code = 0;
    msg = '登录成功';

    ctx.session.user = {
      id: res_user.rows[0].id,
      username: res_user.rows[0].username,
      phone: res_user.rows[0].phone
    }

    console.log('登录成功', ctx.session);

  } else {
    code = 1;
    msg = '账号密码不匹配';
    ctx.session.user = null;
  }

  ctx.body = {
    code,
    msg,
    data
  };

});

module.exports = router.routes();
