function solution(code) {
    let ret = '';
    let mode = 0;
    
    for (let i = 0; i < code.length; i++) {
        code[i] !== '1' ? ret += (i % 2 === mode ? code[i] : '') : '';
        code[i] === '1' ? mode = 1 - mode : mode;
    }
    return ret || 'EMPTY';
}