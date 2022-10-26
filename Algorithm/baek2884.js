const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const input = line.split(' ');
  let h = Number(input[0]);
  let m = Number(input[1]);

  m = h * 60 + m - 45;
  if (m < 0) {
    m = 1440 + m;
  }
  h = parseInt(m / 60);
  m = parseInt(m % 60);
  process.stdout.write(h + ' ' + m + '\n');
  rl.close();
}).on('close', () => {
  process.exit();
});
