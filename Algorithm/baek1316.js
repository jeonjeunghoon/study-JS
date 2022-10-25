const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let caseNum = 0;
let wordNum = 0;
const groupWord = [];
const alphaArr = new Array(26).fill(0);

rl.on('line', line => {
  if (caseNum === 0) {
    caseNum = Number(line);
  } else {
    caseNum--;
    groupWord.push(line);
    if (caseNum === 0) {
      for (let i = 0; i < groupWord.length; i++) {
        for (let j = 0; j < groupWord[i].length; j++) {
					let alpha = groupWord[i][j];
					let alphaIdx = groupWord[i].charCodeAt(j) - 97
					if (alphaArr[alphaIdx] !== 0) {
						wordNum--;
						break;
					}
          while (groupWord[i][j] === alpha && j < groupWord[i].length) {
            alphaArr[alphaIdx]++;
						j++;
          }
					j--;
        }
				wordNum++;
				alphaArr.fill(0);
      }
      console.log(wordNum);
      rl.close();
    }
  }
}).on('close', () => {
  process.exit();
});