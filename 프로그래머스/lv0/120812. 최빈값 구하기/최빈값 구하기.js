function solution(array) {
    let obj = {}
    for (let i of array) {
        obj[i] = (obj[i] || 0) + 1;
    }
    let count = Object.values(obj).sort((a,b) => b - a);
    if (count[0] === count[1]) {
        return -1;
    }
    return Number(Object.keys(obj).find(key => obj[key] === count[0]));
}
