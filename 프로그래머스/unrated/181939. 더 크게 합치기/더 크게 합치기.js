function solution(a, b) {
    let a1 = String(a) + String(b);
    let b1 = String(b) + String(a);
    return a1 >= b1 ? Number(a1) : Number(b1);
}
