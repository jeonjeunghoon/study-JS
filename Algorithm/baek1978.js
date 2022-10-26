const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    count = Number(line);
  } else {
    let primeNum = 0;
    const numArr = line.split(' ').map((element) => Number(element));
    for (const element of numArr) {
      if (element === 2 || element === 3) {
        primeNum++;
        continue;
      }
      const conditionNum = parseInt(element / 2);
      for (let i = 2; i <= conditionNum; i++) {
        if (element % i === 0) {
          break;
        }
        if (i === conditionNum) {
          primeNum++;
        }
      }
    }
    console.log(primeNum);
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
