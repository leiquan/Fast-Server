let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');
const Op = Sequelize.Op;

let dao = require('../../dao/' + path.basename(__dirname));

router.post('/', async function (ctx, next) {

  let get = ctx.request.query;
  let post = ctx.request.body;

  let whereJson = {
    name: {
      [Op.like]: '%' + post.name + '%'
    }
  };

  let data = await dao.list(whereJson);

  return ctx.return(0, '', data);

});

module.exports = router.routes();