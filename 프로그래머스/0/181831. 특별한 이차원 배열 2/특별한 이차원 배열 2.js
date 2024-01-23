function solution(arr) {
    let l = arr.length;
    
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l; j++) {
            if (arr[i][j] !== arr[j][i]) {
                return 0;
            }
        }
    }
    return 1;
}