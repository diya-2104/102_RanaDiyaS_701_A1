const fs = require('fs');
const archiver = require('archiver');

function zipFolder(sourceFolder, outputZipFile) {
  const output = fs.createWriteStream(outputZipFile);
  const archive = archiver('zip', {
    zlib: { level: 9 }, // maximum compression
  });

  output.on('close', () => {
    console.log(`ZIP complete. Total size: ${archive.pointer()} bytes`);
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);
  archive.directory(sourceFolder, false);
  archive.finalize();
}

// Example usage
// zipFolder('./myFolder', 'myCompressed.zip');