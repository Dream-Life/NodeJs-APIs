// Buffer.concat(list[, totalLength])
// 返回一个合并了 list 中所有 Buffer 实例的新建的 Buffer 。

const buf1 = Buffer.alloc(10,1);
const buf2 = Buffer.alloc(14,2);
const buf3 = Buffer.alloc(18,3);
const totalLength = buf1.length + buf2.length + buf3.length;

// 输出: 42
console.log(totalLength);

const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);

// 输出: <Buffer 00 00 00 00 ...>
console.log(bufA);

// 输出: 42
console.log(bufA.length);

// console.log(bufA.toString());

