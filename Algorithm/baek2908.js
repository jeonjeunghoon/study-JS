const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', input => {
    const arr = input.split(' ');
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let num = '';
        for (let j = arr[i].length - 1; j >= 0; j--) {
            num += arr[i][j];
        }
        newArr.push(Number(num));
    }
    if (newArr[0] > newArr[1]) {
        console.log(newArr[0]);
    } else {
        console.log(newArr[1]);
    }
    rl.close();
}).on('close', () => {
    process.exit();
});