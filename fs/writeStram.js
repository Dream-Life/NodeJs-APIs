const fs = require('fs');

const ws = fs.createWriteStream('./writeStramText.txt')

const tid = setInterval(() => {
    const num = parseInt(Math.random() * 10)
    console.log(num);    
    if(num < 7){
        ws.write(num + '')
    } else {
        clearInterval(tid)
        ws.end()
    }
}, 500)



// data - 当有数据可读时触发。
// end - 没有更多的数据可读时触发。
// error - 在接收和写入过程中发生错误时触发。
// finish - 所有数据已被写入到底层系统时触发。

ws.on('finish', () => {
    console.log('done!');    
})