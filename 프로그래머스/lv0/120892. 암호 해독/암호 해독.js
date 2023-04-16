function solution(cipher, code) {
    let arr = cipher.split('');
    let result = '';
    for (let i = code-1; i < arr.length; i+=code) {
        result = result + arr[i];
    } return result;
}

// cipher에서 code의 배수번째 글자 찾기
// 소문자와 공백. 공백포함