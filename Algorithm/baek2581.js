const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let min = 0;
let max = 0;

rl.on('line', (line) => {
  if (min === 0 && max === 0) {
    min = Number(line);
  } else if (min !== 0 && max === 0) {
    max = Number(line);
    let minPrime = 0;
    let sumPrime = 0;
    for (let i = min; i <= max; i++) {
      if (i === 2 || i === 3) {
        sumPrime += i;
        if (minPrime === 0) {
          minPrime = i;
        }
        continue;
      }
      const conditionNum = parseInt(i / 2);
      for (let j = 2; j <= conditionNum; j++) {
        if (i % j === 0) {
          break;
        }
        if (j === conditionNum) {
          sumPrime += i;
          if (minPrime === 0) {
            minPrime = i;
          }
        }
      }
    }
    if (sumPrime !== 0 && minPrime !== 0) {
      console.log(sumPrime);
      console.log(minPrime);
    } else {
      console.log(-1);
    }
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
