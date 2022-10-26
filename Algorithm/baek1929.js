const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (n) => {
  const primeArr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (primeArr[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeArr[j] = false;
      }
    }
  }

  return primeArr;
};

rl.on('line', (line) => {
  const numArr = line.split(' ').map((element) => Number(element));
  solution(numArr[1])
    .map((v, i) => (v ? i : 0))
    .filter((i) => i >= numArr[0])
    .filter((e) => e)
    .forEach((v) => console.log(v));
  rl.close();
}).on('close', () => {
  process.exit();
});
