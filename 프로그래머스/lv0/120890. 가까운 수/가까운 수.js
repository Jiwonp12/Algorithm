function solution(array, n) {
    let newArr = [...array, n].sort((a, b) => a - b);
    let nIdx = newArr.findIndex(x => x === n);
    if (newArr[nIdx] === newArr[newArr.length-1]) {
        return newArr[nIdx-1];
    } else if (newArr[nIdx] - newArr[nIdx-1] <= newArr[nIdx+1] - newArr[nIdx]) {
        return newArr[nIdx-1];
    } else {
        return newArr[nIdx+1];
    }
}