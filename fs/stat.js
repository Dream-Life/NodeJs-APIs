const fs = require('fs');

// 异步
fs.stat('./stat.js', (err, stats) => {
    // if(err) throw err
    if(err){ // 当err时就是文件不存在
        console.log('文件不存在！');
        return;
    }
    console.log(stats.isDirectory()); // 是否是文件夹
    console.log(stats.isFile()); // 是否是文件

    console.log(stats)
})