function solve(n) {
	let count = 0;
	let isHansu = false;

	for (let i = 1; i <= n; i++) {
		isHansu = false;
		if (parseInt(i / 10) === 0 || parseInt(i / 100) === 0) {
			isHansu = true;
		} else {
			let num = i;
			let head = 0;
			let tail = 0;
			while (true) {
				tail = (num % 10) - (parseInt(num / 10) % 10);
				head = (parseInt(num / 10) % 10) - (parseInt(num / 100) % 10);
				if (head !== tail) {
						break;
				}
				if (parseInt(num / 1000) === 0) {
						isHansu = true;
						break;
				}
				num = parseInt(num / 10);
			}
		}
		if (isHansu === true) {
			count++;
		}
	}
	console.log(count);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', input => {
	const n = Number(input);
    solve(n);
    rl.close();
}).on('close', () => {
    process.exit();
});