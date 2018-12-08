let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');

let dao = require('../../dao/' + path.basename(__dirname));

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;
  let page = get.page ? parseInt(get.page) : null;
  let pageSize = get.pageSize ? parseInt(get.pageSize) : null;

  let data = await dao.list_include_books(post);

  ctx.body = {
    code: 0,
    data: data
  };

});

module.exports = router.routes();
