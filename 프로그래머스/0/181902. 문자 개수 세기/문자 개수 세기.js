function solution(my_string) {
    let result = Array(52).fill(0);
    
    for (let i = 0; i < my_string.length; i++) {
        let char = my_string.charCodeAt(i);
        
        if (65 <= char && char <= 90) {
            result[char - 65]++;
        } else if (97 <= char && char <= 122) {
            result[char - 71]++;
        }
    }
    return result;
}