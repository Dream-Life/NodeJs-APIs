// 如果 obj 是一个 Buffer 则返回 true ，否则返回 false 。

console.log(Buffer.isBuffer({}));
console.log(Buffer.isBuffer(Buffer.from([1,2,3,4,5])));
