let path = require('path');
let fs = require('fs');
let Koa = require('koa');
let Router = require('koa-router');
let body = require('koa-body');
let cors = require('koa2-cors');
let xmlParser = require('koa-xml-body');
var session = require('koa-generic-session');
var redisStore = require('koa-redis');
let daoLog = require('./dao/log');
let env = require('./config/env');
let redis = require('./config/redis');

let router = new Router();
let app = new Koa();

// 指定端口
let port = process.env.PORT || 3000;

// 引入定时任务，注意：引入即生效
require('./utils/cron/backupDB');

// 引入路由列表
let routes = require('./router/routes');

// 静态资源路径
// let static = require('koa-static');
// 其实开发接口并不需要 static，但是可能会上传一些文件什么的
// app.use(static(__dirname + '/public'));

// 引入自定义的错误处理中间件，使用自定义 404、500 处理插件
let error = require('./utils/midware/error');
app.use(error);

// 引入自定义的用户认证中间件
let auth = require('./utils/midware/auth');
app.use(auth);

// 设置 proxy 为 true,那么就可以在请求里拿到实际 IP
app.proxy = true;

// session key，签名的时候需要用到
app.keys = ['I am a session key! My random number is 6291619!'];

// 挂载在 context 上的快捷方法：return，这里是统一进行错误相应的代码，正常情况建议使用 ctx.body 返回，错误情况用这个来返回
app.context.return = function (code = -1, message = '', data = null) {
  return this.body = {
    code,
    message,
    data
  }
}

// 挂载在 context 上的快捷方法：log，可以将日志写入数据库
app.context.log = function (key = 'untitled log', value = '') {
  daoLog.add({
    key,
    value
  });
}

// 使用 Redis 存储 session，到期 Redis 自动删除
app.use(session({
  key: 'SSID',
  rolling: true,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,  //cookie 有效期1天，默认为 session 的 ttl
    overwrite: true,
    signed: true
  },
  store: redisStore({
    host: env.redis.host,
    port: env.redis.port,
    auth_pass: env.redis.password,
    db: 0, // session 放在 db0,log 放在 db1
  })
}));

// xml 解析的支持
app.use(xmlParser());
app.use(function (ctx, next) {
  ctx.xml = ctx.request.body
  return next()
});

// 文件上传的支持
app.use(body({ multipart: true }));

// 跨域控制的支持
app.use(cors({
  origin: function (ctx) {
    return '*'; // 允许来自所有域名请求,上线后请注意配置
  },
  credentials: true,
  allowMethods: ['GET', 'POST']
}));

// 把 router 做为参数传递给 routes 使用，以便函数内部 use
routes(router);

// 路由注册到 app
app.use(router.routes()).use(router.allowedMethods());

// 直接使用 KOA 来进行端口监听,0.0.0.0 兼容 IPV4 来获取 IP 地址
app.listen(port, '0.0.0.0');

console.log('服务器正在监听端口：' + port);


// 是否强制使用 HTTPS
// var https = require('https');
// var enforceHttps = require('koa-sslify');
// app.use(enforceHttps());

// 另外HTTP 和 HTTPS可以同时监听
// 秘钥文件由 Let's Enycript 生成
// var options = {
//   key: fs.readFileSync('/Users/leiquan/key/privkey.pem'),
//   cert: fs.readFileSync('/Users/leiquan/key/cert.pem')
// };
// https.createServer(options, app.callback()).listen(port);
