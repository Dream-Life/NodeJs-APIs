const fs = require('fs');

// 异步形式的最后一个参数都是完成时回调函数。
// 传给回调函数的参数取决于具体方法，但回调函数的第一个参数都会保留给异常。
// 如果操作成功完成，则第一个参数会是 null 或 undefined。

// 异步
fs.readFile('./readFile.js', 'utf8' ,(err, data) => {
    if(err) throw err

    // 直接输出的是Buffer数据，
    // 需要data.toString 或 在readFile方法添加'utf8'
    console.log(data);
})

// 同步
const data = fs.readFileSync('../Buffer/buffer.js', 'utf8')
console.log(data);
console.log('*************************************');
