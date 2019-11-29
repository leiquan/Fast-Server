let env = {
    dev: {
        mysql: {
            logging: true, // 是否打印数据库查询日志
            dbname: 'testdb',
            username: 'testdb',
            password: 'testdb@18036',
            host: 'agileloop.mysql.polardb.rds.aliyuncs.com',
            port: 3306,
            baseUrl: 'http://localhost:3002'
        },
        oss: {
            region: 'oss-cn-qingdao',
            accessKeyId: 'LTAIylL1Od2ZnZzi',
            accessKeySecret: '1MOktTyLwFI6qxbIChjYpOCJNb3MUQ',
            bucket: 'feimao-shop'
        },
        sms: {
            accessKeyId: 'rjrswjdaMcMbTvHD',
            secretAccessKey: 'I24NeyUuq9twk8YhUUkGjzjJpLEZOw',
            TemplateCode: 'SMS_142384645',
            SignName: '敏捷无限'
        },
        redis: {
            port: 6379,
            host: '47.95.228.14',
            family: 4,
            password: '930102@redis',
            db: 1
        }
    },
    online: {
        mysql: {
            logging: false, // 是否打印数据库查询日志
            dbname: 'testdb',
            username: 'testdb',
            password: 'testdb@18036',
            host: 'agileloop.mysql.polardb.rds.aliyuncs.com',
            port: 3306,
            baseUrl: 'http://localhost:3002'
        },
        oss: {
            region: 'oss-cn-qingdao',
            accessKeyId: 'LTAIylL1Od2ZnZzi',
            accessKeySecret: '1MOktTyLwFI6qxbIChjYpOCJNb3MUQ',
            bucket: 'feimao-shop'
        },
        sms: {
            accessKeyId: 'LTAIylL1Od2ZnZzi',
            secretAccessKey: '1MOktTyLwFI6qxbIChjYpOCJNb3MUQ',
            TemplateCode: 'SMS_134321227',
            SignName: '敏捷无限'
        },
        redis: {
            port: 6379,
            host: '27.102.114.139',
            family: 4,
            password: '12345@yhr',
            db: 1
        }
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