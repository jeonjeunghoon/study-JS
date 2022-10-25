const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cost = 0;
let sum = 0;
let n = 0;

rl.on("line", input => {
    if (cost === 0 && n === 0) {
        cost = Number(input);
    } else if (cost !== 0 && n === 0) {
        n = Number(input);
    } else {
        n--;
        const arr = input.split(' ');
        sum += arr[0] * arr[1];
        if (n === 0) {
						if (sum === cost) {
							console.log("Yes");
						} else {
							console.log("No");
						}
            rl.close();
        }
    }
}).on("close", () => {
    process.exit();
});