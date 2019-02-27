let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');

let dao = require('../../dao/' + path.basename(__dirname));
let model = require('../../models/' + path.basename(__dirname));
let modelAuthor = require('../../models/author');

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;
  let page = get.page;
  let pageSize = get.pageSize;

  let data =  await dao.sale_an_author_book(post.author_id);

  return ctx.return(0, data, null);

});

module.exports = router.routes();
