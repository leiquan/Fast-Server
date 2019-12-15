let daoResult = require('../../dao/result');

let Crawler = require('crawler');

    let c = new Crawler({
        rateLimit: 2000,
        maxConnections: 1
    });

    let go = function (url) {

        c.queue([{
            uri: url,

            callback: async function (error, res, done) {
                if (error) {
                    console.log(error);
                } else {

                    // let $ = res.$;
                    // let target = $('.books-list');
                    

                    let json = JSON.parse(res.body);

                    console.log(json);

                    for (let i = 0; i < json.d.length; i++){
                        console.log(json.d[i].title);
                        await daoResult.add({
                            title: json.d[i].title,
                            author: json.d[i].userData.username,
                            price: json.d[i].price,
                            jie: json.d[i].lastSectionCount,
                            buy: json.d[i].buyCount
                        })
                    }

                }
                done();
            }
        }]);
    }

    // 省
    go('https://xiaoce-timeline-api-ms.juejin.im/v1/getListByLastTime?uid=&client_id=&token=&src=web&alias=&pageNum=1');