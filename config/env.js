let env = {
    dev: {
        logging: true, // 是否打印数据库查询日志
        username: 'root',
        password: 'lehui@2018',
        host: '47.104.137.247',
        port: 3306,
        baseUrl: 'http://localhost:3002'
    },
    online: {
        logging: false,
        username: 'root',
        password: 'lehui@2018',
        host: '47.104.137.247',
        port: 3306,
        baseUrl: 'https://pay.feimao.shop'
    }
};

let cfg = null;

if (process.env.NODE_ENV == 'develop') {
    cfg = env.dev;
    console.log('测试环境配置');
} else {
    cfg = env.online; // 默认为线上环境，简化线上服务器的配置
    console.log('线上环境配置');
}

module.exports = cfg;