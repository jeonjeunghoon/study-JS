const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let input = [];
let h = 0;
let m = 0;
let cost = 0;

rl.on('line', (line) => {
  count++;
  if (count === 1) {
    input = line.split(' ');
    h = Number(input[0]);
    m = Number(input[1]);
  } else if (count === 2) {
    cost = Number(line);
  }
  if (count === 2) {
    rl.close();
  }
}).on('close', () => {
  m = h * 60 + m + cost;
  if (1440 <= m) {
    m = m - 1440;
  }
  h = parseInt(m / 60);
  m = parseInt(m % 60);
  process.stdout.write(h + ' ' + m + '\n');
  process.exit();
});
