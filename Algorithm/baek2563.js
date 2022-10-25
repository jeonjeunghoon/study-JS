const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let count = 0;
let area = 0;
let maxX = 0, maxY = 0;
const arr = [];

rl.on('line', line => {
	if (count === 0) {
		count = Number(line);
	} else {
		const NumArr = line.split(' ').map(e => Number(e));
		arr.push(NumArr);
		if (maxX < NumArr[0]) {
			maxX = NumArr[0];
		}
		if (maxY < NumArr[1]) {
			maxY = NumArr[1];
		}
		if (arr.length === count) {
			const graph = Array.from(new Array(maxY + 10), () => new Array(maxX + 10).fill(0));
			for (let x = 0; x < arr.length; x++) {
				for (let i = arr[x][1]; i < arr[x][1] + 10; i++) {
					for (let j = arr[x][0]; j < arr[x][0] + 10; j++) {
						if (graph[i][j] === 1) {
							continue;
						}
						area++;
						graph[i][j] = 1;
					}
				}
			}
			console.log(area);
			rl.close();
		}
	}
}).on('close', () => {
	process.exit();
});