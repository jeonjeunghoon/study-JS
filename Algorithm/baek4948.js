const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (n) => {
  const arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
};

rl.on('line', (line) => {
  if (Number(line) === 0) {
    rl.close();
  }
  const num = Number(line);
  console.log(
    solution(num * 2)
      .map((v, i) => (v ? i : 0))
      .filter((i) => i > num)
      .filter((e) => e).length
  );
}).on('close', () => {
  process.exit();
});
