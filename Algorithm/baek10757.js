const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function recurFunc(a, b, adder) {
  if (a === '' && b === '') {
    if (adder > 0) {
      process.stdout.write(adder + '');
    }
    return;
  } else if (a === '') {
    let num = (Number(b[b.length - 1]) % 10) + adder;
    b = b.substring(0, b.length - 1);
    adder = parseInt(num / 10);
    recurFunc(a, b, adder);
    process.stdout.write((num % 10) + '');
  } else if (b === '') {
    let num = (Number(a[a.length - 1]) % 10) + adder;
    a = a.substring(0, a.length - 1);
    adder = parseInt(num / 10);
    recurFunc(a, b, adder);
    process.stdout.write((num % 10) + '');
  } else {
    let num =
      (Number(a[a.length - 1]) % 10) + (Number(b[b.length - 1]) % 10) + adder;
    a = a.substring(0, a.length - 1);
    b = b.substring(0, b.length - 1);
    adder = parseInt(num / 10);
    recurFunc(a, b, adder);
    process.stdout.write((num % 10) + '');
  }
}

rl.on('line', (line) => {
  let numArr = line.split(' ');
  let a = numArr[0];
  let b = numArr[1];
  recurFunc(a, b, 0);
  console.log('\n');
  rl.close();
}).on('close', () => {
  process.exit();
});
