const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const n = Number(input);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write('*');
    }
    process.stdout.write('\n');
  }
  rl.close();
}).on('close', () => {
  process.exit();
});
