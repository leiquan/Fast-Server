var https = require('https');
let path = require('path');
let fs = require('fs');
let Koa = require('koa');
let Router = require('koa-router');
let body = require('koa-body');
let cors = require('koa2-cors');
let xmlParser = require('koa-xml-body');
let session = require('koa-session');
let static = require('koa-static');
// var enforceHttps = require('koa-sslify');

// 引入路由
let routes = require('./router/routes');

// 引入 session 配置
// let sessionConfig = require('./config/session');

// 引入自定义的错误处理中间件
// let error = require('./utils/midware/error');

// 引入自定义的用户认证中间件
// let auth = require('./utils/midware/auth');

// 引入定时任务实例，注意，引入即生效
let cronBackupDB = require('./utils/cron/backupDB');

let router = new Router();
let app = new Koa();

// 指定端口
let port = process.env.PORT || 3000;

// 设置 proxy 为 true,那么就可以在请求里拿到实际 IP
app.proxy = true;

// session key，签名的时候需要用到
app.keys = ['I am a session key!'];

// 使用 session
// app.use(session(sessionConfig, app));

// 用户登录权限鉴定
// app.use(auth);

// 静态资源路径, 其实开发接口并不需要 static，但是可能会上传一些文件什么的
// app.use(static(__dirname + '/public'));

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

// 使用自定义 404、500 处理插件
// app.use(error);

// 把 router 做为参数传递给 routes 使用，以便函数内部 use
routes(router);

// 路由注册到 app
app.use(router.routes()).use(router.allowedMethods());

// 直接使用 KOA 来进行端口监听,0.0.0.0 兼容 IPV4 来获取 IP 地址
app.listen(port, '0.0.0.0');

// 或者强制使用 HTTPS
// app.use(enforceHttps());

// 另外HTTP 和 HTTPS可以同时监听
// 秘钥文件由 Let's Enycript 生成
// var options = {
//   key: fs.readFileSync('/Users/leiquan/key/privkey.pem'),
//   cert: fs.readFileSync('/Users/leiquan/key/cert.pem')
// };
// https.createServer(options, app.callback()).listen(port);

console.log('服务器正在监听端口：' + port);
