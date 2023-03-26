function solution(n) {
    let count = 0;
    for (i = 4; i <= n; i++) {
        let numCount = false;
        for (j = 2; j < i; j++) {
            if (i % j === 0) {
                numCount = true;
            }
        } if (numCount === true) count++;
    }
    return count;
}