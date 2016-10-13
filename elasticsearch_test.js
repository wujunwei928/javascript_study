/**
 * Created by wujunwei on 2016/10/12.
 */

// 启用严格模式
// javascript严格模式详解: http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html
"use strict"

//ElasticSearch Api 文档:

var elasticsearch = require('elasticsearch');

var esClient = new elasticsearch.Client({
    hosts: [
        '10.140.70.123:9200',
        '10.140.70.124:9200',
        '10.140.70.125:9200'
    ],
    requestTimeout: 120000
});

// //获取状态
// esClient.cluster.health(function (err, resp){
//     if(err){
//         console.error(err.message);
//     }else{
//         console.dir(resp);
//     }
// })


//空搜索
esClient.search({},function(error, response){
    if(error){
        console.log(error.message)
    }else{
        console.log(response)
    }
});


// //查询
// esClient.search({
//     index: 'stat-res',
//     q : '_id:AVXjHu3kmwl9Kf1Ur5Dl'
// }, function (error, response){
//     if(error){
//         console.log(error.message)
//     }else{
//         console.log(response.hits.hits)
//     }
// });



esClient.search({
    index: 'stat-res',
    body: {
        query: {
            match: {
                "_id" : 'AVXjHu3kmwl9Kf1Ur5Dl'
            }
        },
        facets: {
            tags: {
                terms: {
                    field: '_id'
                }
            }
        }
    }
}, function (error, response) {
    if(error){
        console.log(error.message)
    }else{
        console.log(response)
    }
});






















