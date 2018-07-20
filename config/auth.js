
// 查看 url 是否在 authConfig 里面，是则检验，否则就放行
const needLoginUrl = [
    '/info/list',
    '/user/modpwd',
]

module.exports = needLoginUrl;
