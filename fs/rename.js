const fs = require('fs');

fs.rename('./writeFileText1', 'writeFileText2', err => {
    if(err) throw err
    console.log('done!')
})