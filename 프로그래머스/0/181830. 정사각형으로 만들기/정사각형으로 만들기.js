function solution(arr) {
    let col = arr.length;
    let row = arr[0].length;
    
    if (col > row) {
        while (arr[0].length !== col) {
            arr.forEach(x => x.push(0));
        }
    } else if (col < row) {
        while (arr.length !== row) {
            arr.push(Array(row).fill(0));
        }
    } else return arr;
    return arr;
}