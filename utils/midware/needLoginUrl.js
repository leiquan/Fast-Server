let needLoginUrl = require('../../config/needLoginUrl');
let enums = require('../../config/enums');

let authHandler = async function (ctx, next) {

    // 按路径匹配保护名单，查询参数不应影响登录校验
    let needLogin = needLoginUrl.includes(ctx.path);

    if (!needLogin) {
        await next();
    } else {

        /**
         * 通过校验session中是否有用户信息
         */
        if (!ctx.session.user) {
            ctx.body = {
                code: enums.status.not_login.code,
                msg: enums.status.not_login.msg,
                data: null
            };
        } else if (ctx.session._expire < new Date().getTime()) {
            ctx.body = {
                code: enums.status.login_expired.code,
                msg: enums.status.login_expired.msg,
                data: null
            };
        } else {
            await next();
        }

    }

}

module.exports = authHandler;
