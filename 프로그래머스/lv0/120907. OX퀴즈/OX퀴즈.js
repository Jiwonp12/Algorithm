function solution(quiz) {
    let result = [];
    
    for (let i of quiz) {
        let num = i.split(' ').map(x => parseInt(x)).filter(x => !isNaN(x));
        if (i.includes('+') && num[0] + num[1] === num[2]) {
            result.push('O');
        } else if (i.includes('-') && num[0] - num[1] === num[2]) {
            result.push('O');
        } else {
            result.push('X');
        }
    }
    return result;
}