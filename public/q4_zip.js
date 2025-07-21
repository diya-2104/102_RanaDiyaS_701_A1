const fs = require('fs');
const archiver = require('archiver');

function zipFolder(source, out) {
  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(out);

  archive.directory(source, false).pipe(stream);
  archive.finalize();
}

zipFolder('./myFolder', 'output.zip');