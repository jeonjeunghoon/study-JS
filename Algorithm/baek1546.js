const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num = 0;

rl.on('line', (input) => {
  if (num === 0) {
    num = Number(input);
  } else {
    const arr = input.split(' ');
    const max = Math.max(...arr);
    let sum = 0;
    arr.forEach((element) => {
      sum += (element / max) * 100;
    });
    console.log(sum / num);
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
