const Sequelize = require('sequelize');
const { mysql } = require('./env');

const sequelize = new Sequelize(mysql.dbname, mysql.username, mysql.password, {
  host: mysql.host,
  port: mysql.port,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00',
  operatorsAliases: 0
});

sequelize.authenticate().then(() => {
  console.log('数据库连接成功！');
}).catch(err => {
  console.error('数据库连接失败：', err);
});

// 同步数据库模型到数据库
sequelize.sync({ logging: mysql.logging }).then(() => console.log('同步数据库模型成功...'));

// 公用一个静态变量实例，提升性能
module.exports = sequelize;
