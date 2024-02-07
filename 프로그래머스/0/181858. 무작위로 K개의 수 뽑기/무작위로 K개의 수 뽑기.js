function solution(arr, k) {
    let result = Array.from(new Set(arr)).slice(0, k);
    return k === result.length ? result : result.concat(Array(k-result.length).fill(-1));
}