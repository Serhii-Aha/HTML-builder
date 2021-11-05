const fs = require('fs');
const path = require('path');
const readline = require('readline');
const {stdin, stdout} = require('process');
const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const readLine = readline.createInterface({input: stdin, output: stdout});
process.on('exit', () => {
    console.log('Thanks!');
});
console.log("Begin enter a text. Stop - 'CTRL+C' or 'exit'");
readLine.on('line', (item) => {
  if (item == 'exit') {
    process.exit();
  } else {
    output.write(`${item}\r\n`);
  }
});