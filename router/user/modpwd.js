let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');

// 单 Model API 的 dao 名就是 controller 的 module 名，直接复制即可，根据路径识别，多 Model 的接口需要分别引用命名，注意修改
let daoName = path.basename(__dirname);
let dao = require('../../dao/' + daoName);

let md5 = require('../../utils/lib/md5');

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;

  if (!post.password) {
    ctx.body = {
      code: 1,
      data: '密码不能为空'
    };
    return;
  }

  let data = await dao.update({
    password: md5(post.password)
  }, {
      id: ctx.session.user.id
    });

  ctx.body = {
    code: 0,
    data: '密码修改成功！'
  };


});

module.exports = router.routes();
