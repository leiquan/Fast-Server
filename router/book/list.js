let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');

let daoName = path.basename(__dirname);
let dao = require('../../dao/' + daoName);

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;
  let page = get.page ? parseInt(get.page) : null;
  let pageSize = get.pageSize ? parseInt(get.pageSize) : null;

  let data = await dao.list(post);

  ctx.body = {
    code: 0,
    data: data
  };

});

module.exports = router.routes();
