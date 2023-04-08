function solution(bin1, bin2) {
    if (bin1 === '0' && bin2 === '0') return '0';
    let result = 0;
    let realResult = '';
    let bN = function (x) {
        for (let i = 0; i < x.length; i++) {
            if (x === '0') {
                result += 0;
            }
            else if (Number(x[i]) === 1 ) result += 2**i
        }
        return;
    }
    bN(bin1.split('').reverse());
    bN(bin2.split('').reverse());
    
    while (result >= 1) {
        realResult += result % 2;
        result = Math.floor(result / 2); 
    }
    return realResult.split('').reverse().join('');
}