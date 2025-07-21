const unzipper = require('unzipper');
const fs = require('fs');

fs.createReadStream('output.zip')
  .pipe(unzipper.Extract({ path: './unzipped' }));