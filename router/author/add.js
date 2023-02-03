let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');
let dao = require('../../dao/' + path.basename(__dirname));
let event = require('../../utils/event/__event');
const Op = Sequelize.Op;

router.post('/', async function (ctx, next) {

  let post = ctx.request.body;

  let data = await dao.add(post);

  ctx.body = {
    code: 0,
    msg: '',
    data: data
  };

});

module.exports = router.routes();