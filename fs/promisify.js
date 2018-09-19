// 解决回调地狱

// 下面的情况就是回调地狱:
// getData(function(a){  
//     getMoreData(a, function(b){
//         getMoreData(b, function(c){ 
//             getMoreData(c, function(d){ 
//                 getMoreData(d, function(e){ 
//                     ...
//                 });
//             });
//         });
//     });
// });

const fs = require('fs');
const promisify = require('util').promisify

const read = promisify(fs.readFile)

// read('./promisify.js').then(data => {
//     console.log(data);
//     console.log('******************************');
//     console.log(data.toString());
// }).catch(err => {
//     console.log(err);
// })

// async/await是写异步代码的新方式，以前的方法有回调函数和Promise。
// async/await是基于Promise实现的，它不能用于普通的回调函数。
// async/await与Promise一样，是非阻塞的。
// async/await使得异步代码看起来像同步代码，这正是它的魔力所在。
// 推荐使用
// 看上去好像是同步的，其实还是异步的
async function test(){
    try {
        const data = await read('./promisify.js')
        console.log(data.toString());
    } catch (error) {
        console.log(error);
    }
}

test()