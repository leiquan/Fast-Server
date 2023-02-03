
// 这里设置全局变量枚举，在这里统一
const enums = {

    // 注意，全局的 status 为负数，接口级的 status 为正数
    status: {
        not_login: {
            code: -1,
            msg: '未登录!'
        },

        login_expired: {
            code: -2,
            msg: '登录过期!'
        },
    }

}

module.exports = enums;
