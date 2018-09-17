const path = require('path')

// path.extname() 方法返回 path 的扩展名，
// 即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束。 
// 如果 path 的最后一部分没有 . 或 path 的文件名（见 path.basename()）的第一个字符是 .，则返回一个空字符串

console.log(path.extname('index.html'))
// 返回: '.html'

console.log(path.extname('kkk.hbjbk.mmm'))
// 返回: '.mmm'

console.log(path.extname('index.'))
// 返回: '.'

console.log(path.extname('index'))
// 返回: ''

console.log(path.extname('.index'))
// 返回: ''