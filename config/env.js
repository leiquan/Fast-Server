let env = {
    dev: {
        mysql: {
            logging: undefined, // 是否打印数据库查询日志
            dbname: 'deel',
            username: 'deel',
            password: '****',
            host: '****',
            port: 3306,
            baseUrl: 'http://localhost:3002'
        },
        oss: {
            region: 'oss-cn-qingdao',
            accessKeyId: '****',
            accessKeySecret: '****',
            bucket: 'feimao-shop'
        },
        sms: {
            accessKeyId: '****',
            secretAccessKey: '****',
            TemplateCode: 'SMS_142384645',
            SignName: '敏捷无限'
        },
        redis: {
            port: 6379,
            host: '****',
            family: 4,
            password: '****',
            db: 2
        }
    },
    online: {
        mysql: {
            logging: false, // 是否打印数据库查询日志
            dbname: 'testdb',
            username: 'testdb',
            password: '****',
            host: '****',
            port: 3306,
            baseUrl: 'http://localhost:3002'
        },
        oss: {
            region: 'oss-cn-qingdao',
            accessKeyId: '****',
            accessKeySecret: '****',
            bucket: 'feimao-shop'
        },
        sms: {
            accessKeyId: '****',
            secretAccessKey: '****',
            TemplateCode: 'SMS_134321227',
            SignName: '敏捷无限'
        },
        redis: {
            port: 6379,
            host: '****',
            family: 4,
            password: '****',
            db: 1
        }
    }
};

let cfg = null;

if (process.env.NODE_ENV == 'develop') {
    cfg = env.dev;
    console.log('@@@@@@@@@@当前处于：测试环境！');
} else {
    cfg = env.online; // 默认为线上环境，简化线上服务器的配置
    console.log('线上环境配置');
}

module.exports = cfg;