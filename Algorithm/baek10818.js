const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let length = 0;

rl.on('line', (input) => {
  if (length === 0) {
    length = Number(input);
  } else {
    const arr = input.split(' ');
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
