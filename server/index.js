// 引入依赖
const { next } = require('cheerio/lib/api/traversing');
var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');
var cnodeUrl = 'https://cnodejs.org/';
// 建立 express 实例
var app = express();
const testURL = 'https://cnodejs.org/topic/607ea4374d20cbe2d168d737'
app.get('/', function (req, res) {
//   superagent.get('https://cnodejs.org/')
//     .end(function (err, sres) {
//         if(err){
//             return next(err);
//         }
//         var $ = cheerio.load(sres.text);
//         var topicUrls  = [];
//         $('#topic_list .topic_title').each(function(idx,element){
//             var $element = $(element);
//             var href = url.resolve(cnodeUrl, $element.attr('href'));
//             topicUrls.push(href)
//         })
//         let _getArr = [];
//         topicUrls.forEach((item)=>{
//             // let _get = new Promise((resolve,reject)=>{
//             //     superagent.get(item)
//             //         .end((err2,sres2)=>{
//             //             let $2 = cheerio.load(sres2.text);
//             //             resolve($2)
//             //         })
//             // })
//             _getArr.push(item)
//         })
//         res.send(_getArr);
//         // Promise.all(_getArr).then((result)=>{
//         //     res.send(result);
//         // })
        
//     })
    superagent.get(testURL).end((err, sres) => {
        if(err){
            return next(err);
        }
        var $ = cheerio.load(sres.text);
        var topicUrls = [];
        $('.markdown-text').each(function(idx,element){
            var $element = $(element);
            topicUrls.push( $element)
        })
        res.send(topicUrls);
    })

  
});

app.listen(3000, function (req, res) {
  console.log('app is running at port 3000');
});