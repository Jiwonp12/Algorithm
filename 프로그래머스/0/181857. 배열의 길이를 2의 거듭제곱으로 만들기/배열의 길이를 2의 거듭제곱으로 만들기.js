function solution(arr) {
    let l = arr.length;
    
    return (l & (l - 1) === 0 ? arr : arr.concat(Array((2 ** Math.ceil(Math.log2(l))) - l).fill(0)));
}