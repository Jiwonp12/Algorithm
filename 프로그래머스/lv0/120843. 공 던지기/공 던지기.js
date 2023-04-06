function solution(numbers, k) {
    let idx = 0;
    while (k > 1) {
        idx = (idx + 2) % numbers.length;
        k--;
    }
    return numbers[idx];
}

// 1 + ((k-1)*2 num.length)