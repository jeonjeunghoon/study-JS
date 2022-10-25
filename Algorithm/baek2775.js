const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let caseNum = 0;
let k = 0;
let n = 0;

rl.on('line', line => {
    if (caseNum === 0) {
        caseNum = Number(line);
    } else if (k === 0) {
        k = Number(line);
    } else {
        let arr = [];
        n = Number(line);
        for (let i = 1; i <= n; i++) {
            arr.push(i);
        }
        for (let i = 1; i <= k; i++) {
            for (let j = 1; j < n; j++) {
                arr[j] += arr[j - 1];
            }
        }
        console.log(arr[n - 1]);
        k = 0;
        n = 0;
        caseNum--;
        if (caseNum === 0) {
            rl.close();
        }
    }
}).on('close', () => {
    process.exit();
});