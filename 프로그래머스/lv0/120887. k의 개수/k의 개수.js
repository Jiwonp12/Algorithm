function solution(i, j, k) {
    let result = ''
    for (let a = i; a <= j; a++) {
        result += (a);
    }
    return result.split('').filter(x => Number(x) === k).length;
}