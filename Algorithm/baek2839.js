const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    let weight = Number(line);
    let isFind = false;
    let x = Math.ceil(weight / 5);
		let y = 0;
    if (x * 5 > weight) {
			x--;
    }
    while (x >= 0) {
        y = 0;
        while (weight > x*5 + y*3) {
            y++;
        }
				if (weight === x*5 + y*3) {
					isFind = true;
					break;
				}
        x--;
    }
    if (isFind === true) {
        console.log(x + y);
    } else {
        console.log(-1);
    }
    rl.close();
}).on('close', () => {
    process.exit();
});