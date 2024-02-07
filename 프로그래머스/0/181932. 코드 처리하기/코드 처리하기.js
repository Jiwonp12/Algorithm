function solution(code) {
    let ret = '';
    let mode = 0;
    
    for (let i = 0; i < code.length; i++) {
        ret += code[i] !== '1' ? (i % 2 === mode ? code[i] : '') : '';
        mode = code[i] === '1' ? 1 - mode : mode;
    }
    return ret || 'EMPTY';
}