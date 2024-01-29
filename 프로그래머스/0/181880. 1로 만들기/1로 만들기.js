function solution(num_list) {
    let result = 0;
    
    for (let num of num_list) {
        while (num !== 1) {
            num = num % 2 === 0 ? num / 2 : (num - 1) / 2;
            result++;
        }
    }
    return result;
}