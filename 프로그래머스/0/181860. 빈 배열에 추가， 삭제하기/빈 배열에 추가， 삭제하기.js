function solution(arr, flag) {
    let result = [];
    
    for (let i = 0; i < flag.length; i++) {
        if (flag[i]) {
            result.push(...Array(arr[i] * 2).fill(arr[i]));
        } else {
            result.splice(result.length - arr[i], arr[i]);
        }
    }
    return result;
}