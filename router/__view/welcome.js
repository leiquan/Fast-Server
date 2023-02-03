let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');
let event = require('../../utils/event/__event');
const Op = Sequelize.Op;

router.get('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;

  ctx.state = {
    hello: 'world，我是一个来自路由的参数'
  };

  await ctx.render('welcome');

});

module.exports = router.routes();