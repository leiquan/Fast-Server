let login = require('../../config/auth');
let enums = require('../../config/enums');

let authHandler = async function (ctx, next) {

    // 查看 url 是否在 login 里面，是则检验，否则就放行
    let needLogin = false;
    for (let i = 0; i < login.length; i++) {
        if (ctx.request.url == login[i]) {
            needLogin = true;
        }
    }

    if (!needLogin) {
        await next();
    } else {

        /**
         * 通过校验session中是否有用户信息
         */
        if (!ctx.session.user) {
            ctx.body = {
                code: enums.status.not_login.code,
                msg: enums.status.not_login.message,
                data: null
            };
        } else if (ctx.session._expire < new Date().getTime()) {
            ctx.body = {
                code: enums.status.login_expired.code,
                msg: enums.status.login_expired.message,
                data: null
            };
        } else {
            await next();
        }

    }

}

module.exports = authHandler;