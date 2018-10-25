let env = {
    dev: {
        mysql: {
            logging: true, // 是否打印数据库查询日志
            username: 'root',
            password: '930102@My',
            host: '27.102.114.139',
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
            accessKeyId : 'LTAIylL1Od2ZnZzi',
            secretAccessKey : '1MOktTyLwFI6qxbIChjYpOCJNb3MUQ',
            TemplateCode: 'SMS_134321227',
            SignName: '肥猫优生活'
        }
    },
    online: {
        mysql: {
            logging: false,
            username: 'root',
            password: 'lehui@2018',
            host: '47.104.137.247',
            port: 3306,
            baseUrl: 'https://pay.feimao.shop'
        },
        oss: {
            region: 'oss-cn-qingdao',
            accessKeyId: 'LTAIylL1Od2ZnZzi',
            accessKeySecret: '1MOktTyLwFI6qxbIChjYpOCJNb3MUQ',
            bucket: 'feimao-shop'
        },
        sms: {
            accessKeyId : 'LTAIylL1Od2ZnZzi',
            secretAccessKey : '1MOktTyLwFI6qxbIChjYpOCJNb3MUQ',
            TemplateCode: 'SMS_134321227',
            SignName: '肥猫优生活'
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