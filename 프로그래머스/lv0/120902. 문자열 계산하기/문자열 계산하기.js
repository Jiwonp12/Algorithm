function solution(my_string) {
    let result = 0;
    let plus = true;
    let arr = my_string.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) && result === 0) {
            result += Number(arr[i]);
        } else if (arr[i] === '+') {
            plus = true;
        } else if (arr[i] === '-') {
            plus = false;
        } else if (Number(arr[i])) {
            plus === true ? result += Number(arr[i]) : result -= Number(arr[i]);
        }
    }

    return result;
}