// path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。

// 给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，
// 直到构造完成一个绝对路径。 
// 例如，给定的路径片段的序列为：/foo、/bar、baz，
// 则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。

const path = require('path')

console.log(path.resolve('/foo/bar', './baz'))
// 返回: '/foo/bar/baz'

console.log(path.resolve('/foo/bar', '/tmp/file/'))
// 返回: '/tmp/file'

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'