// path.parse() 方法返回一个对象，对象的属性表示 path 的元素。
const path = require('path')

// 在 POSIX 上
console.log(path.parse('/home/user/dir/file.txt'))
// 返回:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘
// (请无视以上字符串中的空格，它们只是为了布局)

// 在 Windows 上
console.log(path.parse('C:\\path\\dir\\file.txt'))
// 返回:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// " C:\      path\dir   \ file  .txt "
// └──────┴──────────────┴──────┴─────┘
// (请无视以上字符串中的空格，它们只是为了布局)