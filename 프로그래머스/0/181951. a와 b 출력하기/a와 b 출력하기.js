const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let a = 4;
let b= 5;

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log('a = '+ input[0]);
    console.log('b = '+ input[1]);
});