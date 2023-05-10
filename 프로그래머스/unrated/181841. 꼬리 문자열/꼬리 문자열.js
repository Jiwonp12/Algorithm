function solution(str_list, ex) {
    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i].includes(ex)) {
            str_list[i] = '';
        }
    }
    
    return str_list.join('');
}