const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let input = [];

rl.on('line', (line) => {
  count++;
  input.push(line);
  if (count === 2) {
    rl.close();
  }
}).on('close', () => {
  const A = Number(input[0]);
  const B = Number(input[1]);
  const B1 = parseInt(B / 100);
  const B2 = parseInt((B / 10) % 10);
  const B3 = parseInt(B % 10);
  console.log(parseInt(A * B3));
  console.log(parseInt(A * B2));
  console.log(parseInt(A * B1));
  console.log(parseInt(A * B));
  process.exit();
});
