function solution(num_list) {
    let l = num_list[num_list.length-1];
    let n = num_list[num_list.length-2];
    
    if (l > n) {
        num_list.push(l-n);
    } else {
        num_list.push(l*2);
    }
    
    return num_list;
}