function solution(numlist, n) {
    let arr = numlist.map(num => ({ sort: Math.abs(num - n), num: num}))
    .sort((a, b) => {
        if (a.sort === b.sort) {
           return b.num - a.num;
        }
        return a.sort - b.sort;
    }).map(num => num.num);
    
    return arr;
}