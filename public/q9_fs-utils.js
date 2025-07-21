const fs = require('fs');

fs.writeFileSync('test.txt', 'Hello, FS!');
fs.appendFileSync('test.txt', '\nAppended Text');
console.log(fs.readFileSync('test.txt', 'utf8'));