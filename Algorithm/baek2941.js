const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    let word = 0;
    for (let i = 0; i < line.length; i++) {
        if (line[i] === 'd') {
            if (line[i + 1] === 'z') {
                i++;
            }
            word++;
            i++;
        } else {
            word++;
            i++;
        }
    }
		console.log(word);
    rl.close();
}).on('close', () => {
    process.exit();
});