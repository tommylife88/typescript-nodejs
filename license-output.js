const exec = require('child_process').exec;
const fs = require('fs');
const outputFilePath = 'THIRD_PARTY_LICENSES.txt';

exec(
  'yarn licenses generate-disclaimer --ignore-platform  --ignore-optional --ignore-engines',
  { maxBuffer: 400 * 1024 },
  (err, stdout, stderr) => {
    if (err || stderr) {
      console.log('exec error');
      throw err || stderr;
    }

    fs.writeFile(outputFilePath, stdout, (err) => {
      if (err) {
        console.log('can not write');
        throw err;
      } else {
        console.log('completed!');
      }
    });
  }
);
