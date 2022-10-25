const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', input => {
    if (input.length === 0) {
        rl.close();
    }
    const arr = input.split(' ');
    const sum = Number(arr[0]) + Number(arr[1]);
		console.log(sum);
}).on('close', () => {
    process.exit();
});