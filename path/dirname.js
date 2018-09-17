const path = require('path')


// path.dirname() 方法返回一个 path 的目录名，类似于 Unix 中的 dirname 命令
console.log(path.dirname('/foo/bar/baz/asdf/quux'))
// 返回: '/foo/bar/baz/asdf'