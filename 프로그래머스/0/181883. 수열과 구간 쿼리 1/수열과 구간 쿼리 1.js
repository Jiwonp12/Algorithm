function solution(arr, queries) {
    let result = [...arr];

    for (let j = 0; j < queries.length; j++) {
        let s = queries[j][0];
        let e = queries[j][1];

        for (let i = s; i <= e; i++) {
            result[i] += 1;
        }
    }
    return result;
}