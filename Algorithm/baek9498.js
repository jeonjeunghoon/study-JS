const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const score = Number(line);
  if (score >= 90) {
    console.log('A');
  } else if (score >= 80) {
    console.log('B');
  } else if (score >= 70) {
    console.log('C');
  } else if (score >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
  rl.close();
}).on('close', () => {
  process.exit();
});
