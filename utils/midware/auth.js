let authConfig = require('../../config/loginAuth');
let globalVariable = require('../../config/globalVariable');

let authHandler = async function (ctx, next) {

    // 查看 url 是否在 authConfig 里面，是则检验，否则就放行
    let needAuth = false;
    for (let i = 0; i < authConfig.length; i++) {
        if (ctx.request.url == authConfig[i]) {
            needAuth = true;
        }
    }

    if (!needAuth) {
        await next();
    } else {

        /**
         * 通过校验session中是否有用户信息
         */
        if (!ctx.session.user) {
            ctx.body = globalVariable.status.not_login
        } else if (ctx.session._expire < new Date().getTime()) {
            ctx.body = globalVariable.status.not_login
            ctx.body = globalVariable.status.login_expired
        } else {
            await next();
        }

    }

}

module.exports = authHandler;