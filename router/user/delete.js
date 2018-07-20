let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');

// 单 Model API 的 dao 名就是 controller 的 module 名，直接复制即可，根据路径识别，多 Model 的接口需要分别引用命名，注意修改
let daoName = path.basename(__dirname);
let dao = require('../../dao/' + daoName);

router.get('/', async function (ctx, next) {

  let query = ctx.request.query;

  let data = await dao.delete(query.id);

  ctx.body = {
    code: 0,
    data: data
  };

});

module.exports = router.routes();
