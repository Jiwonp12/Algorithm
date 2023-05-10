function solution(num_list) {
    let result = [0, 0];
    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) {
            result[0] += num_list[i];
        } else {
            result[1] += num_list[i];
        }
    }
    
    return Math.max(...result);
}