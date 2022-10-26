const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

rl.on('line', (input) => {
  arr.push(Number(input));
  if (arr.length === 10) {
    const modArr = Array.from(arr, (element) => element % 42);
    const set = new Set(modArr);
    console.log(set.size);
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
