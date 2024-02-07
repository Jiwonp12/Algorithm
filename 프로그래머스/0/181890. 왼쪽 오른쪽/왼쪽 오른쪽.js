function solution(str_list) {
    let result = [];
    
    for (let i = 0; i < str_list.length; i++) {
        result.push(str_list[i]);
        if (str_list[i] === 'l') {
            result.pop();
            return result;
        } else if (str_list[i] === 'r') {
            return str_list.slice(i+1);
        }
    }
    return [];
}