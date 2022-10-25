const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arr = new Array(26).fill(-1);

rl.on('line', input => {
    for (let i = 0; i < input.length; i++) {
			if (arr[input[i].charCodeAt(0) - 'a'.charCodeAt(0)] === -1) {
				arr[input[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i;
			}
    }
    for (let i = 0; i < arr.length; i++) {
        process.stdout.write(arr[i] + '');
        if (i < arr.length - 1) {
            process.stdout.write(' ');
        } else {
            process.stdout.write('\n');
        }
    }
    rl.close();
}).on('close', () => {
    process.exit();
});