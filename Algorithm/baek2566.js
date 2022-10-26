function App() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const arr = [];
  let max = -1,
    x = 0,
    y = 0;

  const isValidLine = (lineArr) => {
    return lineArr.every((element) => {
      const num = Number(element);
      return num < 100 && num >= 0 ? true : false;
    });
  };

  const fillArray = (adder) => {
    arr.push(adder);
  };

  const findMaxValueAndIndex = () => {
    arr.forEach((e1, i1) => {
      e1.forEach((e2, i2) => {
        if (max < e2) {
          max = Number(e2);
          x = i2 + 1;
          y = i1 + 1;
        }
      });
    });
    console.log(max);
    console.log(y, x);
  };

  rl.on('line', (line) => {
    if (!isValidLine(line.split(' '))) {
      process.exit();
    }
    fillArray(line.split(' '));
    if (arr.length === 9) {
      findMaxValueAndIndex();
      rl.close();
    }
  }).on('close', () => {
    process.exit();
  });
}

App();
