function solution(num, total) {
    const start = Math.ceil((2 * total / num - (num - 1)) / 2);
    let result = [];

    for (let i = 0; i < num; i++) {
        result.push(start + i);
    }
    
    return result;
}