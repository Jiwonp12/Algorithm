const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('').map(x => {
        if ('a' <= x && x <= 'z') {
            return x.toUpperCase();
        } else {
            return x.toLowerCase();
        }
    });
    console.log(str.join(''));
});