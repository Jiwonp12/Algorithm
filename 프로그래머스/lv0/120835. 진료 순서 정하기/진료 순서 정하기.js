function solution(emergency) {
    let result = [];
    let sort = emergency.slice().sort((a, b) => b - a);
    emergency.map(x => result.push(sort.indexOf(x)+1));
    return result;
}