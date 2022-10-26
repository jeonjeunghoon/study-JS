const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const chess = [1, 1, 2, 2, 2, 8];
let input;

rl.on('line', (line) => {
  input = line.split(' ');
  for (let i = 0; i < chess.length; i++) {
    if (chess[i] !== input[i]) {
      process.stdout.write((chess[i] - input[i]).toString());
    } else {
      process.stdout.write('0');
    }
    if (i !== chess.length - 1) {
      process.stdout.write(' ');
    } else {
      console.log();
    }
  }
  rl.close();
}).on('close', () => {
  process.exit();
});
