const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const numArr = line.split(' ');
  const n = Math.ceil((numArr[2] - numArr[1]) / (numArr[0] - numArr[1]));
  console.log(n);
  rl.close();
}).on('close', () => {
  process.exit();
});
