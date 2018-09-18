// 只执行一次方法

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.once('test', () => {
    console.log('test!');    
})

setInterval(() => {
    myEmitter.emit('test');
}, 500)