function solution(n) {
    const array = [];
    let divider = 2;

    while (n > 1) {
        if (n % divider === 0) {
            array.push(divider);
            n /= divider;
        } else {
            divider++;
        }
    }
    
    const result = Array.from(new Set(array));
    return result;
}