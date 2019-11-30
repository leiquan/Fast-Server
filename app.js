let Koa = require('koa');
let Router = require('koa-router');
let cors = require('koa2-cors');
let daoLog = require('./dao/log');
let env = require('./config/env');
let router = new Router();
let app = new Koa();

// session key，签名用
app.keys = ['I am a session key! My random number is 6291619!'];

// 引入路由列表
let routes = require('./router/routes');

// 事件监听注册列表
require('./utils/event/__list');

// 消息队列注册列表
require('./utils/queue/__list');

// 定时任务处理列表
// require('./utils/schedule/backupDB');
// require('./utils/schedule/todo');

// 静态资源路径，开发接口并不需要 static，但是可能会上传文件
// let static = require('koa-static');
// app.use(static(__dirname + '/public'));

// 如果需要服务端渲染页面模板
let views = require('koa-views');
app.use(views(__dirname + '/views', { extension: 'ejs' }));

// 引入自定义的错误处理中间件，处理 404、500
let error = require('./utils/midware/error');
app.use(error);

// 引入自定义的用户认证中间件，处理需要鉴权的用户列表
let auth = require('./utils/midware/auth');
app.use(auth);

// 挂载在 context 上的快捷方法：log，可以将日志写入数据库
app.context.log = function (key = 'untitled log', value = '') {
  daoLog.add({
    key,
    value
  });
}

// 使用 Redis 存储 session，到期 Redis 自动删除，这里需要简化一下，移到config里面去
let session = require('koa-generic-session');
let redisStore = require('koa-redis');
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

// xml 解析的支持，并且挂载到cxt上，处理微信公众号等需要用到
// let xmlParser = require('koa-xml-body');
// app.use(xmlParser());
// app.use(function (ctx, next) {
//   ctx.xml = ctx.request.body
//   return next()
// });

// 文件上传的支持
let body = require('koa-body');
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

// 设置 proxy 为 true,那么就可以在请求里拿到实际 IP
app.proxy = true;

// 直接使用 KOA 来进行端口监听,0.0.0.0 兼容 IPV4 来获取 IP 地址
let port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0');

console.log('服务器正在监听端口：' + port);

// 是否强制使用 HTTPS
// let https = require('https');
// let enforceHttps = require('koa-sslify');
// app.use(enforceHttps());

// 秘钥文件由 Let's Enycript 生成
// let options = {
//   key: fs.readFileSync('/Users/leiquan/key/privkey.pem'),
//   cert: fs.readFileSync('/Users/leiquan/key/cert.pem')
// };
// https.createServer(options, app.callback()).listen(port);