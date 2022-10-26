const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let caseNum = 0;
const arr = [];

rl.on('line', (input) => {
  if (caseNum === 0) {
    caseNum = Number(input);
  } else {
    arr.push(input.split(' '));
    if (arr.length === caseNum) {
      arr.forEach((element) => {
        let sum = 0;
        element.forEach((e, index) => {
          if (index !== 0) {
            sum += Number(e);
          }
        });
        const avg = sum / element[0];
        let count = 0;
        element.forEach((e, index) => {
          if (index !== 0 && e > avg) {
            count++;
          }
        });
        console.log(((count / element[0]) * 100).toFixed(3) + '%');
      });
      rl.close();
    }
  }
}).on('close', () => {
  process.exit();
});
