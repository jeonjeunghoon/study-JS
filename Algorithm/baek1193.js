const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    const num = Number(line);
		let sum = 1;
		let cycle = 1;
		while (sum < num) {
			cycle++;
			sum += cycle;
		}
    let order = sum - num + 1;
    let reverseOrder = cycle - order + 1;
    if (cycle % 2 === 1) {
        console.log(order + '/' + reverseOrder);
    } else {
        console.log(reverseOrder + '/' + order);
    }
    rl.close();
}).on('close', () => {
    process.exit();
});