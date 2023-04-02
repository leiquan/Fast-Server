let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');
let dao = require('../../dao/' + path.basename(__dirname));

const Op = Sequelize.Op;

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;

  let data = await dao.update(post, get);

  ctx.body = {
    code: 0,
    msg: '',
    data: data
  };

});

module.exports = router.routes();
