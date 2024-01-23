function solution(a, b) {
    let plus = Number(''+a+b);
    
    if (plus >= 2*a*b) {
        return plus;
    }
    return 2*a*b;
}