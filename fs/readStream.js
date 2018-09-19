const fs = require('fs');

const rs = fs.createReadStream('./readStream.js')

// process.stdout是控制台
// pipe是将数据流传到process.stdout上
// 相当于readFile输出
rs.pipe(process.stdout)
