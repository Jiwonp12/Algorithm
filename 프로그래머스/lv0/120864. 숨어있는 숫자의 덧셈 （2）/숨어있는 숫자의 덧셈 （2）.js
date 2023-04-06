function solution(my_string) {
    let result = 0;
    let save = '';
    for (let i = 0; i < my_string.length; i++) {
        if (!isNaN(parseInt(my_string[i]))) {
            save += my_string[i];
        } else if (isNaN(parseInt(my_string[i]))) {
            result += Number(save);
            save = '';
        }
    }
    result += Number(save);
    return Number(result);
}
