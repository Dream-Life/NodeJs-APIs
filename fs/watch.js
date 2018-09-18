// fs.watch(filename[, options][, listener])

// filename <string> | <Buffer> | <URL>

// options <string> | <Object>
//     persistent <boolean> 指明如果文件正在被监视，进程是否应该继续运行。默认 = true
//     recursive <boolean> 指明是否全部子目录应该被监视，或只是当前目录。 适用于当一个目录被指定时，且只在支持的平台（详见 Caveats）。默认 = false
//     encoding <string> 指定用于传给监听器的文件名的字符编码。默认 = 'utf8'

// listener <Function> | <undefined> Default: undefined
//     eventType <string>
//     filename <string> | <Buffer>

const fs = require('fs');

fs.watch('./', {
    recursive: true
}, (eventType, filename) => {
    console.log(eventType);
    console.log(filename);
})