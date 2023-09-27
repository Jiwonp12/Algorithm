function solution(score) {
    let result = [];
    let aver = score.map(x => (x[0] + x[1]) / 2);
    let sort = aver.slice().sort((a, b) => b - a);
    
    aver.forEach(x => {
        result.push(sort.indexOf(x) + 1);
    });
    
    return result;
}
