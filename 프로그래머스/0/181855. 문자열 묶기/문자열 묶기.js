function solution(strArr) {
    const obj = strArr.reduce((acc, cur) => {
        let num = cur.length;
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    
    return Math.max(...Object.values(obj));
}