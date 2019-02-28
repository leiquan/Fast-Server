let routes = function (router) {

  // 定义控制器的路由映射
  // 为什么不用文件遍历自动映射？
  // 为了安全，要对每一个暴露出来的接口，都要手动加，这样才有印象，否则，未做校验的 delete 接口可能就会自动暴露出来了
  let controller = {

    // ****** user 常用接口，登录，注册，查询，更新资料，修改密码 ******
    '/user/login': './user/login',
    '/user/reg': './user/reg',
    '/user/list': './user/list',
    '/user/update': './user/update',
    '/user/modpwd': './user/modpwd',

    // ****** sms 常用接口，短信发送 ******
    '/sms/verify_code': './sms/verify_code',

    // ****** file 常用接口，文件上传 OSS ******
    '/file/upload_oss': './file/upload_oss',

    // ****** utils 常用接口，数据库备份 ******
    '/utils/db_backup': './utils/db_backup',

    // ****** book 以下为8个标准接口，增删改查，自增、计数、求和、模糊搜索，以下接口绝大部分可以完全复用或者稍作修改后复用 ******
    '/book/add': './book/add',
    '/book/delete': './book/delete',
    '/book/update': './book/update',
    '/book/list': './book/list', // 默认有分页功能
    '/book/all': './book/all', // 默认列出全部
    '/book/increment': './book/increment',
    '/book/count': './book/count',
    '/book/sum': './book/sum',

    // 以下两个接口需要自定义修改，复用非常简单
    '/book/list_with_author': './book/list_with_author', // 这个接口做关联查询，需要研究明白，然后所有的关联查询就非常的轻松
    '/book/search': './book/search', // 模糊搜索接口，需要设置搜索字段
    '/book/sale_an_author_book': './book/sale_an_author_book', 

    // 复制自 book 接口，其他接口完全可以参照
    '/author/add': './author/add',
    '/author/list': './author/list',
    '/author/search': './author/search',
    '/author/list_include_books': './author/list_include_books',

    // review
    '/review/add': './review/add',
    '/review/list': './review/list',
    '/review/search': './review/search'

  };
  for (x in controller) {
    router.use(x, require(controller[x]));
  }
}

module.exports = routes;
