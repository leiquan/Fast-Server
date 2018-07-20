let request = require("request");
var fs = require("fs");
var https = require("https");
var path = require("path");

let get_url = async function (url) {
  return new Promise((resolve, reject) => {
    request.get({ url: url }, function (err, httpResponse, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

let post_form = async function (url, formData) {
  return new Promise((resolve, reject) => {
    request.post({ url: url, formData: formData }, function (
      err,
      httpResponse,
      data
    ) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

let post_raw = async function (url, rawData) {
  return new Promise((resolve, reject) => {
    request.post({ url: url, body: rawData }, function (
      err,
      httpResponse,
      data
    ) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

let post_https = async function (host, path_url, xml) {
  return new Promise((resolve, reject) => {
    // 请求 https 的配置
    var options = {
      host: host,
      port: 443,
      path: path_url,
      method: "POST",

      // 以下就是用来做客户端认证的，也就是双向 HTTPS 认证

      key: fs.readFileSync(
        path.join(__dirname, "../../config/key/apiclient_key.pem"),
        "utf8"
      ),
      cert: fs.readFileSync(
        path.join(__dirname, "../../config/key/apiclient_cert.pem"),
        "utf8"
      ),

      // 是否拒绝不可信连接？调试的时候可以设置为 false，否则可能看不到报错，因为请求被拒绝了
      rejectUnauthorized: true,
      agent: false
    };
    var req = https.request(options, function (res) {
      console.log("HTTPS 校验状态: " + res.connection.authorized);
      res.on("data", function (d) {
        let data = "" + d; // buffer 转字符串
        resolve(data);
      });
    });
    req.write(xml);
    req.end();
    req.on("error", function (e) {
      reject(e);
    });
  });
};

module.exports = { get_url, post_form, post_raw, post_https };
