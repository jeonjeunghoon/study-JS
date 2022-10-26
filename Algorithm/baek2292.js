const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  let num = Number(line);
  if (num === 1) {
    console.log(1);
  } else {
    let nextRoom = 2;
    let cycle = 2;
    while (true) {
      let i = nextRoom;
      nextRoom = nextRoom + 6 * (cycle - 1);
      while (i < nextRoom) {
        i++;
      }
      if (i > num) {
        break;
      }
      cycle++;
    }
    console.log(cycle);
  }
  rl.close();
}).on('close', () => {
  process.exit();
});
