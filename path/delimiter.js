const path = require('path')

// 提供平台特定的路径分隔符：
// Windows 上是 ;
// POSIX 和 ubuntu 上是 :


// 在 POSIX 和 ubuntu 上
console.log(process.env.PATH);
// 输出: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'
console.log(process.env.PATH.split(path.delimiter))
// 返回: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']

// 在 Windows 上
console.log(process.env.PATH);
// 输出: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'
console.log(process.env.PATH.split(path.delimiter))
// 返回: ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']