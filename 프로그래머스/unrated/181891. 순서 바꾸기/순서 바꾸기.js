function solution(num_list, n) {
    let arr = num_list.splice(0, n);
    return [...num_list, ...arr];
}