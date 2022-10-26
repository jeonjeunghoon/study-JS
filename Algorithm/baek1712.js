const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const arr = line.split(' ');
  if (arr[2] - arr[1] <= 0) {
    console.log(-1);
  } else {
    let a = Math.ceil(arr[0] / (arr[2] - arr[1]));
    if (a < 0) {
      console.log(-1);
    } else if (arr[0] % (arr[2] - arr[1]) !== 0) {
      console.log(a);
    } else {
      console.log(a + 1);
    }
  }
  rl.close();
}).on('close', () => {
  process.exit();
});
