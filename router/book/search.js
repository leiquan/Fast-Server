let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');
const Op = Sequelize.Op;

let dao = require('../../dao/' + path.basename(__dirname));

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;

  let whereJson = {
    author: {
      [Op.like]: '%' + post.author + '%'
    }
  };

  let data = await dao.list(whereJson);

  ctx.body = {
    code: 0,
    data: data
  };

});

module.exports = router.routes();