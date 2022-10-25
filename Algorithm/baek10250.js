const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let caseNum = 0;
let h = 0;
let w = 0;
let n = 0;

rl.on('line', line => {
    if (caseNum === 0) {
        caseNum = Number(line);
    } else {
        let arr = line.split(' ');
        h = Number(arr[0]);
        w = Number(arr[1]);
        n = Number(arr[2]);
				let y = n % h;
				if (n % h === 0) {
					y = h;
				}
				let x = Math.ceil(n / h);
				let adder = '';
				if (x < 10) {
					adder = '0';
				}
				console.log(y + adder + x);
        caseNum--;
        if (caseNum === 0) {
            rl.close();
        }
    }
}).on('close', () => {
    process.exit();
});