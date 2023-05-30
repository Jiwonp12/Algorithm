function solution(a, b, c) {
    let set = new Set([a, b, c]);
    if (set.size === 1) {
        return (a+b+c)*(a*a+b*b+c*c)*(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3));
    } else if (set.size === 2) {
        return (a+b+c)*(a*a+b*b+c*c);
    } else {
        return a+b+c;
    }
}