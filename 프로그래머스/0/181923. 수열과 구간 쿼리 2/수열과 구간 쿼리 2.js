function solution(arr, queries) {
    let result = [];
    
    for (let [s, e, k] of queries) {
        let num = Infinity;
        
        for (let i = s; i <= e; i ++) {
            if (k < arr[i] && arr[i] < num) {
                num = arr[i];
            }
        }
        num !== Infinity ? result.push(num) : result.push(-1);
    }
    return result;
}