// 中文乱码
const buf = Buffer.from('中文乱码！')
const StringDecoder = require('string_decoder').StringDecoder
const decoder = new StringDecoder('utf8')

console.log(buf);
console.log(buf.toString());

// 一个中文 3个字节
// const num = 3 
// 5个字节中文乱码
const num = 5

console.log('******************************');

for(let i = 0; i < buf.length; i += num){
    const b = Buffer.allocUnsafe(num)
    buf.copy(b,0,i)
    console.log('b:');
    console.log(b);
    console.log(b.toString());
}

console.log('******************************');

// StringDecoder
for(let i = 0; i < buf.length; i += num){
    const b = Buffer.allocUnsafe(num)
    buf.copy(b,0,i)
    console.log('b:');
    console.log(b);
    console.log(decoder.write(b));
}