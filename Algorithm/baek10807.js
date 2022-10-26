const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let size = 0;
let arr = [];
let findNum = 0;
let count = 0;

rl.on('line', (line) => {
  if (size === 0) {
    size = Number(line);
  } else if (arr.length === 0) {
    arr = [...line.split(' ')];
  } else {
    findNum = Number(line);
    arr.forEach((element) => {
      if (Number(element) === findNum) {
        count++;
      }
    });
    console.log(count);
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
