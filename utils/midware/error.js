let logDao = require('../../dao/log');

let errorHandler = async function (ctx, next) {

    try {

        await next();

    } catch (error) {

        logDao.add({
            key: '500',
            value: JSON.stringify({
                url: ctx.request.url,
                error: error.toString()
            })
        });

        ctx.status = 500;
        ctx.body = {
            code: 500,
            msg: error.toString()
        }

    }

    if (ctx.status == 404) {

        ctx.log('404', JSON.stringify({
            url: ctx.request.url
        }));

        return ctx.return(404, 'Not Found :(', null);
    }

}

module.exports = errorHandler;