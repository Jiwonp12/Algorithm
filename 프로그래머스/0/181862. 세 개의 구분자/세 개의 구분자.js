function solution(myStr) {
    const result = [];
    let str = '';
    
    for (let i = 0; i < myStr.length; i++) {
        if (myStr[i] === 'a' || myStr[i] === 'b' || myStr[i] === 'c') {
            if (str !== '') {
                result.push(str);
                str = '';
            }
        } else {
            str += myStr[i];
        }
    }
    
    if (str !== '') {
        result.push(str);
    }
    if (result.length === 0) {
        result.push('EMPTY');
    }
    return result;
}