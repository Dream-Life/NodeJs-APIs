const path = require('path')

// path.basename() 方法返回一个 path 的最后一部分，类似于 Unix 中的 basename 命令。 没有尾部文件分隔符

let herePath1 = path.basename('/home/dream/Documents/Study/nodejs/NodeJs-APIs/path/basename.js', '.js')
let herePath2 = path.basename('/home/dream/Documents/Study/nodejs/NodeJs-APIs/path/basename.js')

console.log(herePath1)
// 返回： basename
console.log(herePath2)
// 在window和ubuntu上显示： basename.js
// 在POSIX上显示： /home/dream/Documents/Study/nodejs/NodeJs-APIs/path/basename.js

// 要想在任何操作系统上处理 Windows 文件路径时获得一致的结果，
// 可以使用 path.win32： path.win32.basename('C:\\temp\\myfile.html')
// 无论在POSIX，还是window和ubuntu上 都返回： myfile.html

// 要想在任何操作系统上处理 POSIX 文件路径时获得一致的结果，
// 可以使用 path.posix: path.posix.basename('/tmp/myfile.html');
// 无论在POSIX，还是window和ubuntu上 都返回： myfile.html

// 注意：在 Windows 上 Node.js 遵循单驱动器工作目录的理念。 
// 当使用驱动器路径且不带反斜杠时就能体验到该特征。
// 例如，fs.readdirSync('c:\\') 可能返回与 fs.readdirSync('c:') 不同的结果.