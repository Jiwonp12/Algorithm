function solution(n) {
    let result = 0;
    let count = 0;
    
    while (count < n) {
        result++;
        if (result % 3 === 0 || String(result).includes('3')) {
            continue;
        }
        count++;
    }
    return result;
}