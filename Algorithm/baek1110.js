const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', input => {
    const n = Number(input);
    let newNum = n;
    let cycle = 0;
    while (true) {
        cycle++;
        newNum = (10 * (newNum % 10)) + ((parseInt(newNum / 10) + (newNum % 10)) % 10);
        if (n === newNum) {
            console.log(cycle);
            rl.close();
            break;
        }
    }
}).on('close', () => {
    process.exit();
});