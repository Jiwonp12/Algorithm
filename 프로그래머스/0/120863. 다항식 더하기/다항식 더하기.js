function solution(polynomial) {
    const arr = polynomial.split('+').map(x => x.trim());
    const obj = {x: 0, num: 0};
    let result = '';
    
    for (let i of arr) {
        if (i.includes('x')) {
            let v = i.includes('x') ? (i === 'x' ? 1 : parseInt(i)) : 0;
            obj.x += v;
        } else {
            obj.num += parseInt(i);
        }
    }
    
    if (obj.x !== 0) {
        result += (obj.x === 1 ? 'x' : obj.x + 'x');
    }
    if (obj.num !== 0) {
        if (obj.x !== 0) {
            result += ' + ';
        }
        result += obj.num;
    }
    return result;
}