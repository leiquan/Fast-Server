let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');
let dao = require('../../dao/' + path.basename(__dirname));
let event = require('../../utils/event/__event');
const Op = Sequelize.Op;

let md5 = require('../../lib/md5');

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

    ctx.body = {
      code: 0 ,
      msg: '登录成功',
      data: null
    };

  } else {

    ctx.session.user = null;

    ctx.body = {
      code: 1,
      msg: '账号密码不匹配',
      data: null
    };
  }

});

module.exports = router.routes();
