let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');
let dao = require('../../dao/' + path.basename(__dirname));

const Op = Sequelize.Op;

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;

  let cloum = get.cloum ? get.cloum : '';   // cloum 可以是多个数组字符串
  let by = get.by ? get.by : 1;

  let data = await dao.increment([cloum], post, by);

  ctx.body = {
    code: 0,
    msg: '',
    data: data
  };

});

module.exports = router.routes();
