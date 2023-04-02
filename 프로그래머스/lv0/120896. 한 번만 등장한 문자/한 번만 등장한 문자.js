function solution(s) {
    let obj = {};
    for(let i of s) {
        obj[i] = obj[i] ? obj[i]+1 : 1;
    }
    return Object.keys(obj).filter(x => obj[x] === 1).sort().join('');
}