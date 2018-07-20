
let daoSession = require('../dao/session');

const store = {

    async get(key) {

        let resSession = await daoSession.list({
            session_id: key
        });

        if (resSession.count == 0) {
            return null;
        } else {
            return JSON.parse(resSession.rows[0].session);
        }

    },

    async set(key, session) {

        // 是否存在key？存在，就更新；不存在，就创建
        let resSession = await daoSession.list({
            session_id: key
        });

        if (resSession.count == 0) {
            // add
            let res = await daoSession.add({
                session_id: key,
                session: JSON.stringify(session)
            })
        } else {
            // update
            let res = await daoSession.update({
                session: JSON.stringify(session)
            }, {
                    session_id: key
                })
        }

    },

    async destroy(key) {
        let res = await daoSession.delete({
            session_id: key
        });
    }
}

const sessionConfig = {
    key: 'SSID',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true, // 是否签名
    rolling: false, // 是否每次cookie都要改变
    renew: false, // 是否再session快要过期的时候刷新
    store: store // 实现三个接口的cookies存储方式
};

module.exports = sessionConfig;
