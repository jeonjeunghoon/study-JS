const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num = 0;
const arr = [];
let score = 0;
let totalScore = 0;

rl.on('line', (input) => {
  if (num === 0) {
    num = Number(input);
  } else {
    arr.push(input);
    if (arr.length === num) {
      arr.forEach((element) => {
        score = 0;
        totalScore = 0;
        for (let i = 0; i < element.length; i++) {
          if (element[i] === 'O') {
            score++;
            totalScore += score;
          } else {
            score = 0;
          }
        }
        console.log(totalScore);
      });
      rl.close();
    }
  }
}).on('close', () => {
  process.exit();
});
