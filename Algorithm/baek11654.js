const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  console.log(input.charCodeAt(0));
  rl.close();
}).on('close', () => {
  process.exit();
});
