const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let t = 0;
let i = 0;
let sum = "";

rl.on("line", input => {
    if (t === 0) {
        t = Number(input);
    } else {
        i++;
        const arr = input.split(' ');
        sum += "Case #" + i + ": ";
        sum += Number(arr[0]) + Number(arr[1]);
        sum += "\n";
        if (i === t) {
            console.log(sum);
            rl.close();
        }
    }
}).on("close", () => {
    process.exit();
});