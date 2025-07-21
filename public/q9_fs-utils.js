const fs = require('fs');

fs.writeFileSync('demo.txt', 'Hello, FS!');
fs.appendFileSync('demo.txt', '\nAppended Text');
console.log(fs.readFileSync('demo.txt', 'utf8'));