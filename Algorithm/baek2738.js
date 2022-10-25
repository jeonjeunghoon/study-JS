function App() {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	
	let n = 0, m = 0;
	const xArr = [];
	const yArr = [];

	const getSize = (arr) => {
		n = Number(arr[0]);
		m = Number(arr[1]);
	}

	const fillArray = (arr, filling) => {
		arr.push(filling);
	}

	const sumArrayTwoDimension = () => {
		const numArr = xArr.map((e1, i1) => {
			return e1.map((e2, i2) => Number(e2) + Number(yArr[i1][i2]));
		})
		numArr.forEach(e1 => {
			e1.forEach((e2, i) => {
				if (i === m - 1) {
					process.stdout.write(e2 + '\n');
				} else {
					process.stdout.write(e2 + ' ');
				}
			})
		});
	}
	
	rl.on('line', line => {
		if (n === 0 && m === 0) {
			getSize(line.split(' '));
		} else if (xArr.length !== n) {
			fillArray(xArr, line.split(' '));
		} else if (xArr.length !== yArr.length) {
			fillArray(yArr, line.split(' '));
			if (xArr.length === yArr.length) {
				sumArrayTwoDimension();
				rl.close();
			}
		}
	}).on('close', () => {
		process.exit();
	});
}

App();