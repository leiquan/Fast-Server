let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');

let dao = require('../../dao/' + path.basename(__dirname));

let md5 = require('../../lib/md5');

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;

  if (!post.password) {
    
    ctx.body = {
      code: 1,
      msg: '密码不能为空',
      data: null
    };
  }

  let data = await dao.update({
    password: md5(post.password)
  }, {
      id: ctx.session.user.id
    });

  ctx.body = {
    code: 0,
    msg: '密码修改成功！',
    data: data
  };

});

module.exports = router.routes();
