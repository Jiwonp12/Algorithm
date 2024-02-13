function solution(a, b) {
    const func = (x, y) => (y === 0 ? x : func(y, x % y));
    let num = b / func(a, b);
    
    while (num % 2 === 0) {
        num /= 2;
    }
    
    while (num % 5 === 0) {
        num /= 5;
    }
    return num === 1 ? 1 : 2;
}