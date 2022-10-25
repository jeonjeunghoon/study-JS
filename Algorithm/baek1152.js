const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', input => {
		inputTrim = input.trim();
    let strArr = inputTrim.split(' ');
		if (strArr[0] === '') {
			console.log(0);
		} else {
    	console.log(strArr.length);
		}
    rl.close();
}).on('close', () => {
    process.exit();
});