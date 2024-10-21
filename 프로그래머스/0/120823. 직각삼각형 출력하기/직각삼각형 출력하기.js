const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let number = Number(input[0]);
    let stars = '';
    for (let i = 0; i < number; i++) {
        stars += '*';
        console.log(stars);
    }
});