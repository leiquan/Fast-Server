let env = {
    dev: {
        mysql: '****',
        oss: '****',
        sms: '****',
        redis:'****'
    },
    online: {
        mysql: '****',
        oss: '****',
        sms: '****',
        redis: '****',
    }
};

let password = null;

if (process.env.NODE_ENV == 'develop') {
    password = env.dev;
} else {
    password = env.online; // 默认为线上环境，简化线上服务器的配置
}

module.exports = password;