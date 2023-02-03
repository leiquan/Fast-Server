let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');
let dao = require('../../dao/' + path.basename(__dirname));
let event = require('../../utils/event/__event');
const Op = Sequelize.Op;

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;
  let page = get.page;
  let pageSize = get.pageSize;

  let data = await dao.list_with(
    {
      table: 'author',
      attributes: ['id', 'name', 'description']
    },
    {
      foreignKey: 'id', // author 表中的键 与 
      targetKey: 'author_id' // book 表中的键 对应
    }, post, page, pageSize);

  ctx.body = {
    code: 0,
    msg: '',
    data: data
  };

});

module.exports = router.routes();
