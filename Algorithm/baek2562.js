const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.on('line', input => {
    arr.push(Number(input));
    if (arr.length === 9) {
        let max = 0;
        let idx = 0;
        arr.forEach((item, index) => {
            if (max < item) {
                max = item;
                idx = index + 1;
            }
        });
        console.log(max);
        console.log(idx);
        rl.close();
    }
})