const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  let num = Number(line);
  while (num > 1) {
    const conditionNum = parseInt(num / 2);
    for (let i = 2; i <= conditionNum; i++) {
      if (num % i === 0) {
        console.log(i);
        num = parseInt(num / i);
        break;
      }
      if (i === conditionNum) {
        console.log(num);
        rl.close();
      }
    }
    if (num === 2 || num === 3) {
      console.log(num);
      break;
    }
  }
  rl.close();
}).on('close', () => {
  process.exit();
});
