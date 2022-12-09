const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  let time = 0;

  const isPrime = num => {
    for (let i = 2; i <= parseInt(num / 2, 10); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  rl.on('line', line => {
    if (time === 0) {
      time = parseInt(line, 10);
    } else {
      const num = parseInt(line, 10);

      let left = parseInt(num / 2, 10);
      let right = parseInt(num / 2, 10);
      while (!isPrime(left) || !isPrime(right)) {
        left--;
        right++;
      }
      console.log(left, right);

      time--;
      if (time === 0) {
        rl.close();
      }
    }
  });

  rl.on('close', () => {
    process.exit();
  });
};

solution();
