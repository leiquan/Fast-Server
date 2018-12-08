let errorHandler = async function (ctx, next) {

    // 在 error 中间件中，把访问日志也做了
    let ip = ctx.req.headers['x-forwarded-for'] ||
        ctx.req.connection.remoteAddress ||
        ctx.req.socket.remoteAddress ||
        ctx.req.connection.socket.remoteAddress;

    let get = ctx.request.query;
    let post = ctx.request.body;

    ctx.log('access_log', ip + '; ' + ctx.request.url);

    try {

        await next();

    } catch (error) {

        ctx.log('500', ip + '; ' + ctx.request.url + '; ' + error.toString());

        ctx.status = 500;

        return ctx.return(500, error.toString(), null);

    }

    if (ctx.status == 404) {

        ctx.log('404', ip + '; ' + ctx.request.url);

        return ctx.return(404, 'Not Found :(', null);
    }

}

module.exports = errorHandler;