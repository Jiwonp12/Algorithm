function solution(s){
    let arr = s.split('');
    let open = arr.filter(x => x === '(').length;
    let close = arr.filter(x => x === ')').length;
    if (s[0] === ')' || s[s.length-1] === '(' || open !== close ||
        (s[s.length-3] === '(' && s[s.length-2] === '(')) {
        return false;
    }
    return true;
}