// 返回 buf 在字节数上分配的内存量。 
// 注意，这并不一定反映 buf 内可用的数据量。

const buf = Buffer.alloc(1234);

// 输出: 1234
console.log(buf.length);

buf.write('some string', 0, 'ascii');

// 输出: 1234
console.log(buf.length);
