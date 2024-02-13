function solution(a, b) {
    const func = (x, y) => (y === 0 ? x : func(y, x % y));
    b /= func(a, b);
    
    while (b % 2 === 0) {
        b /= 2;
    }
    
    while (b % 5 === 0) {
        b /= 5;
    }
    
    return b === 1 ? 1 : 2;
}