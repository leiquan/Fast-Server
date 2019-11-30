let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');

let dao = require('../../dao/' + path.basename(__dirname));

let daoUser = require('../../dao/user');
let trimPost = require('../../utils/Interceptor/trimPost');
let md5 = require('../../utils/lib/md5');

// 用户注册逻辑
// 1.是否发验证码，是否存在手机号？存在，更新验证码，不存在，插入验证码
// 输入用户名、密码、手机、验证码才可以注册

router.post('/', async function (ctx, next) {

    let get = ctx.request.query;
    let post = ctx.request.body;

    if (!post.username || !post.password || !post.phone || !post.verify_code) {
        
        ctx.body = {
            code: 1,
            msg: '请检查输入！',
            data: null
        };
    } else {

        // 验证码是否正确
        let res_user = await daoUser.list({
            phone: post.phone
        });
        if (res_user.count == 0) {
            ctx.body = {
                code: 2,
                msg: '手机号不存在！',
                data: null
            };
        } else {
            if (post.verify_code != res_user.rows[0].verify_code) {
                ctx.body = {
                    code: 3,
                    msg: '验证码不正确！',
                    data: null
                };
            } else {

                let res_reg = await daoUser.update({
                    username: post.username,
                    password: md5(post.password)
                }, {
                        phone: post.phone
                    });

                ctx.body = {
                    code: 0,
                    msg: '用户注册成功',
                    data: res_reg
                };

            }
        }

    }

});

module.exports = router.routes();