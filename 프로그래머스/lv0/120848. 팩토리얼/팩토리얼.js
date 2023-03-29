function solution(n) {
    let result = 1;
    let i = 0;
    while (result <= n) {
        i++;
        result = result * (1 * i)
    }
    return i-1;
}