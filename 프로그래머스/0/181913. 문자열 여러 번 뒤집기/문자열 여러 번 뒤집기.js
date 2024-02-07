function solution(my_string, queries) {
    for (let [s, e] of queries) {
        my_string = my_string.substring(0, s) + my_string.substring(s, e+1).split('').reverse()
        .join('') + my_string.substring(e+1);
    }
    return my_string;
}