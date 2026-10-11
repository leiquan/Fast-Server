const assert = require('assert');
const authHandler = require('../utils/midware/needLoginUrl');
const enums = require('../config/enums');

// 同时支持现有 Mocha 测试和不依赖服务器的直接运行。
const suite = typeof describe === 'function' ? describe : require('node:test').describe;
const testCase = typeof it === 'function' ? it : require('node:test').it;

suite('登录保护路径匹配', function () {
    function context(url, session = {}) {
        return {
            path: new URL(url, 'http://localhost').pathname,
            request: { url },
            session
        };
    }

    for (const url of ['/user/modpwd', '/user/modpwd?x=1']) {
        testCase('未登录时拦截 ' + url, async function () {
            const ctx = context(url);
            let called = false;
            await authHandler(ctx, async function () { called = true; });
            assert.strictEqual(called, false);
            assert.deepStrictEqual(ctx.body, { ...enums.status.not_login, data: null });
        });
    }

    testCase('带查询参数的过期会话仍被拦截', async function () {
        const ctx = context('/user/modpwd?x=1', { user: { id: 1 }, _expire: 0 });
        await authHandler(ctx, async function () { assert.fail('不应进入后续中间件'); });
        assert.deepStrictEqual(ctx.body, { ...enums.status.login_expired, data: null });
    });

    testCase('有效会话可以访问受保护路径', async function () {
        const ctx = context('/user/modpwd?x=1', { user: { id: 1 }, _expire: Date.now() + 60000 });
        let called = false;
        await authHandler(ctx, async function () { called = true; });
        assert.strictEqual(called, true);
        assert.strictEqual(ctx.body, undefined);
    });

    testCase('公开路径仍正常放行', async function () {
        const ctx = context('/user/login?x=1');
        let called = false;
        await authHandler(ctx, async function () { called = true; });
        assert.strictEqual(called, true);
        assert.strictEqual(ctx.body, undefined);
    });
});
