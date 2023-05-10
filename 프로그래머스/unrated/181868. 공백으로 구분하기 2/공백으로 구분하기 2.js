function solution(my_string) {
    let result = [];
    let arr = my_string.split(' ');
    for (let i of arr) {
        if (i !== '') {
           result.push(i); 
        }
    }
    return result;
}