let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');

let daoName = path.basename(__dirname);
let dao = require('../../dao/' + daoName);

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;

  let data = await dao.update(post, get);

  ctx.body = {
    code: 0,
    data: data
  };

});

module.exports = router.routes();
