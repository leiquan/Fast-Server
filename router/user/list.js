let path = require('path');
let router = require('koa-router')();

let dao = require('../../dao/' + path.basename(__dirname));

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;
  let page = get.page ? parseInt(get.page) : null;
  let pageSize = get.pageSize ? parseInt(get.pageSize) : null;

  let data = await dao.list(post);
  
  return ctx.return(0, '', data);

});

module.exports = router.routes();