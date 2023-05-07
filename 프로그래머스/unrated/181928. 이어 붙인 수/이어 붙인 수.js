function solution(num_list) {
    let o = '';
    let e = '';
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            e += num_list[i];
        } else {
            o += num_list[i]
        }
    }
    return parseInt(o) + parseInt(e);
}