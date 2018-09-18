const fs = require('fs');

// encoding以对象方式
fs.writeFile('./writeFileText','This is a Test\n', {
    encoding: 'utf8'
}, err => {
    if(err) throw err
    console.log('done!');
})

// encoding以String方式
fs.writeFile('./writeFileText1','This is a Test2\n', 'utf8',err => {
    if(err) throw err
    console.log('done!');
})

// 直接以Buffer传入
const buf = Buffer.from('This is a Buffer!\n')
fs.writeFile('./writeFileBuffer',buf,err => {
    if(err) throw err
    console.log('done!');
})