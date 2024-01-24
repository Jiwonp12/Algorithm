function solution(a, d, included) {
    return included.map((x, i) => (x ? i * d + a : 0)).reduce((acc, cur) => acc + cur, 0);
}