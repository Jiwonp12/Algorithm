function solution(arr) {
    let prev = [];
    let result = 0;
    
    while (!arr.every((x, i) => x === prev[i])) {
        prev = arr.slice();
        result ++;
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 50 && arr[i] % 2 === 0) {
                arr[i] /= 2;
            } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
                arr[i] = arr[i] * 2 + 1;
            }
        }
    }
    return result-1;
}