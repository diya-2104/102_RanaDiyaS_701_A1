const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);

unlinkAsync('sample.txt')
  .then(() => console.log('File deleted'))
  .catch(err => console.error(err));