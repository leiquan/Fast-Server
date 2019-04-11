let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');

router.get('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;

  ctx.state = {
    hello: 'world'
  };

  await ctx.render('welcome');

});

module.exports = router.routes();