const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const input = line.split(' ');
  const A = Number(input[0]);
  const B = Number(input[1]);
  console.log(parseInt(A + B));
  console.log(parseInt(A - B));
  console.log(parseInt(A * B));
  console.log(parseInt(A / B));
  console.log(parseInt(A % B));
  rl.close();
}).on('close', () => {
  process.exit();
});
