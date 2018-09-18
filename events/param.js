// 参数传递

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('error', (err, time) => {
    console.log(err); 
    console.log(time);
       
})

myEmitter.emit('error', new Error('oops!'), Date.now())