const Sequelize = require('sequelize');
let env = require('./env');

const sequelize = new Sequelize('agile_server', env.username, env.password, {
  host: env.host,
  port: env.port,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00',
  operatorsAliases: false
});

sequelize.authenticate().then(() => {
  console.log('数据库连接成功！');
}).catch(err => {
  console.error('数据库连接失败：', err);
});

// 同步数据库模型到数据库
sequelize.sync({ logging: env.logging }).then(() => console.log('同步数据库模型成功...'));

// 公用一个静态变量实例，提升性能
module.exports = sequelize;
