// eventEmitter.emit() 方法允许将任意参数传给监听器函数。 
// 当一个普通的监听器函数被 EventEmitter 调用时，
// 标准的 this 关键词会被设置指向监听器所附加的 EventEmitter。

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()
myEmitter.on('event', function(a, b) {
    console.log(a, b, this);
  // 打印:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined }
})
myEmitter.emit('event', 'a', 'b');

// es6
// const myEmitter = new MyEmitter();
// myEmitter.on('event', (a, b) => {
//   console.log(a, b, this);
//   // 打印: a b {}
// });
// myEmitter.emit('event', 'a', 'b');
