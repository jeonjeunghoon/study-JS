const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t = 0;
let a = 0;
let b = 0;

rl.on('line', (input) => {
  if (t === 0) {
    t = Number(input);
  } else {
    t--;
    const arr = input.split(' ');
    a = Number(arr[0]);
    b = Number(arr[1]);
    console.log(a + b);
    if (t === 0) {
      rl.close();
    }
  }
}).on('close', () => {
  process.exit();
});
