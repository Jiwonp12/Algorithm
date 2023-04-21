function solution(array, commands) {
    let result = [];
    for (let i = 0; i < commands.length; i++) {
        let f = array.slice(commands[i][0]-1,commands[i][1])
        .sort((a, b) => a - b)[commands[i][2]-1];
        result.push(f);
        }   
    return result;
}