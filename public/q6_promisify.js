const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);

unlinkAsync('test.txt')
  .then(() => console.log('File deleted'))
  .catch(err =>{
    console.log("Unfortunately, there was a problem undergoing this function!");
});