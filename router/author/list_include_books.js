let path = require('path');
let router = require('koa-router')();

let dao = require('../../dao/' + path.basename(__dirname));

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;
  let page = get.page;
  let pageSize = get.pageSize;

  let data = await dao.list_include({
    table: 'book',
    attributes: ['id', 'title', 'description']
  }, {
    foreignKey: 'author_id', // book 表中的键 与 
    targetKey: 'id' // author 表中的键 对应
  },post, page, pageSize);

  ctx.body = {
    code: 0,
    msg: '',
    data: data
  };

});

module.exports = router.routes();
