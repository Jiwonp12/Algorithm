function solution(arr, queries) {
    const result = [...arr];
    
    for (let [s, e, k] of queries) {
        for (let i = s; i <= e; i++) {
            if (i % k === 0) {
                result[i] += 1;
            }
        }
    }
    return result;
}