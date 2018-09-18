// 撤销方法

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

function fn1(){
    console.log('fn1');    
}

function fn2(){
    console.log('fn2');    
}

const myEmitter = new MyEmitter();

myEmitter.on('test', fn1)
myEmitter.on('test', fn2)

setInterval(() => {
    myEmitter.emit('test');
}, 500)

setTimeout(() => {
    // 单个移除
    // myEmitter.removeListener('test', fn2)
    
    // 移除所有
    myEmitter.removeAllListeners('test')
}, 1500)