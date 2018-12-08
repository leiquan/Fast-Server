let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');

let daoName = path.basename(__dirname);
let dao = require('../../dao/' + daoName);

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;

  let cloum = get.cloum ? get.cloum : '';   // cloum 可以是多个数组字符串
  let by = get.by ? get.by : 1;

  let data = await dao.increment([cloum], post, by);

  ctx.body = {
    code: 0,
    data: data
  };

});

module.exports = router.routes();
