let path = require('path');
let router = require('koa-router')();

let dao = require('../../dao/' + path.basename(__dirname));

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;
  let page = get.page;
  let pageSize = get.pageSize;

  let data = await dao.list(post, page, pageSize);

  return ctx.return(0, '', data);

});

module.exports = router.routes();
