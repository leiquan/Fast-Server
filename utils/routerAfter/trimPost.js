
function trim_post(post) {

  // 如果 post 值为空，就不查数据库，否则查不到

  for (let key in post) {
    if (post[key] == '') {
      delete post[key]
    }
  }
  return post;
};

module.exports = trim_post;