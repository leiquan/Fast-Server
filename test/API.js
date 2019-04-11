const supertest = require('supertest');
var assert = require('assert');
var should = require('should');

let request = supertest('http://localhost:3000');

// 测试套件
describe('API 测试：', function () {

  // 测试用例
  it('查询书籍数量', function (done) {

    request.post('/book/count')
      .expect(200, {
        code: 0,
        data: 36,
        message: ''
      })
      .end(function (err, res) {
        should.not.exist(err);
        done();
      })

  });

})