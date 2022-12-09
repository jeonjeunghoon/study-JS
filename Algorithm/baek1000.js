const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  const input = line.split(' ');
  const result = Number(input[0]) + Number(input[1]);
  console.log(result);
  rl.close();
}).on('close', () => {
  process.exit();
});
