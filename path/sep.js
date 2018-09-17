// 提供了平台特定的路径片段分隔符：
    // Windows 上是 \
    // POSIX 上是 /

const path = require('path')

// 在 POSIX 上
console.log('foo/bar/baz'.split(path.sep))
// 返回: ['foo', 'bar', 'baz']


// 在 Windows 上
console.log('foo\\bar\\baz'.split(path.sep))
// 返回: ['foo', 'bar', 'baz']
