const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const alphaArr = new Array(26).fill(0);

rl.on('line', input => {
    input = input.toUpperCase();
		let idx = 0;
    let max = 0;
    let maxAlpha = '';
    let isSame = false;
    for (let i = 0; i < input.length; i++) {
				idx = input.charCodeAt(i) - 65;
        alphaArr[idx]++;
        if (alphaArr[idx] > max) {
            max = alphaArr[idx];
            maxAlpha = input[i];
            isSame = false;
        } else if (alphaArr[idx] === max) {
            isSame = true;
        }
    }
    if (isSame === true) {
        console.log('?');
    } else {
				console.log(maxAlpha);
    }
    rl.close();
}).on('close', () => {
    process.exit();
});