var crypto = require('crypto');
// 32位小写的md5加密
function md5 (text) {
  return crypto.createHash('md5').update(text).digest('hex');
};

module.exports = md5;