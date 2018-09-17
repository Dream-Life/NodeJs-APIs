const path = require('path')

function out(msg){
    console.log(msg)
}
// path.isAbsolute() 方法会判定 path 是否为一个绝对路径

// 在 POSIX 上
out('POSIX:')
out(path.isAbsolute('/foo/bar')) // true
out(path.isAbsolute('/baz/..'))  // true
out(path.isAbsolute('qux/'))     // false
out(path.isAbsolute('.'))        // false

// 在 Windows 上
out('Window:')
out(path.isAbsolute('//server'))    // true
out(path.isAbsolute('\\\\server'))  // true
out(path.isAbsolute('C:/foo/..'))   // true
out(path.isAbsolute('C:\\foo\\..')) // true
out(path.isAbsolute('bar\\baz'))    // false
out(path.isAbsolute('bar/baz'))     // false
out(path.isAbsolute('.'))           // false
