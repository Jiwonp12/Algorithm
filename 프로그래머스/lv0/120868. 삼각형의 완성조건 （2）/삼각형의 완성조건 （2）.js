function solution(sides) {
    let result = 0;
    let l = Math.max(...sides);
    let r = Math.min(...sides);
    for (let i = l-r+1; i <= l; i++) {
        if (l < r+i) {
            result += 1;
        }
    }
    for (let i = l+1; i <= r+l; i++) {
        if (i < r+l) {
            result += 1;
        }
    }
    return result;
}

// l이 가장클때
// i가 가장클때