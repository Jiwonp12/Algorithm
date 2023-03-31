function solution(s) {
    let result = 0;
    let arr = s.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Z') {
            result = result - Number(arr[i-1]);
        } else {
            result = result + Number(arr[i]);
        }
    }
    return result;
}