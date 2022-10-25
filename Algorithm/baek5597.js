const readline = require('readline');
const { Z_FULL_FLUSH } = require('zlib');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arr = [];
arr.length = 30;
arr.fill(false);
let count = 0;

rl.on('line', line => {
	arr[Number(line) - 1] = true;
	count++;
	if (count >= 28) {
		arr.forEach((element, index) => {
			if (element === false) {
				console.log(index + 1);
			}
		})
		rl.close();
	}
}).on('close', () => {
    process.exit();
});