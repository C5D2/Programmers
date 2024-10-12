const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let swap = "";
    for (let i = 0; i < str.length; i++) {
        const v = str[i]
        if (v === v.toUpperCase()){
            swap += v.toLowerCase();
        }
        else {
            swap += v.toUpperCase();
        }
    }
    console.log(swap);
});