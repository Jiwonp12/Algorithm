function solution(myString, pat) {
    let result = 0;
    
    for (let i = 0; i <= myString.length - pat.length; i++) {
        if (myString.substring(i, i+pat.length) === pat) result++;
    }
    return result;
}