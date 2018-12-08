let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');

let dao = require('../../dao/' + path.basename(__dirname));

let md5 = require('../../utils/lib/md5');

router.post('/', async function (ctx, next) {

  let post = ctx.request.body;

  let res_user = await dao.list({
    phone: post.phone,
    password: md5(post.password) // 加密方式为：32位小写 MD5
  });

  if (res_user.count > 0) {

    ctx.session.user = {
      id: res_user.rows[0].id,
      username: res_user.rows[0].username,
      phone: res_user.rows[0].phone
    }

    return ctx.return(0, '登录成功', null);

  } else {

    ctx.session.user = null;

    return ctx.return(1, '账号密码不匹配', null);
  }

});

module.exports = router.routes();
