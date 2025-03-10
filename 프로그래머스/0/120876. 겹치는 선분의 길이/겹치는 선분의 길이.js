function solution(lines) {
    let result = 0;
    let max = Math.max(...lines.flat(1));
    let min = Math.min(...lines.flat(1));
    let abs = Math.abs(min);
    const arr = new Array(max-min+1).fill(0);
    
    for (let i = 0; i < 3; i++) {
        let left = lines[i][0]+abs;
        let right = lines[i][1]+abs;
        
        for (let j = left; j < right; j++) {
            arr[j]++;
        }
    }
    return arr.filter(x => x > 1).length;
}