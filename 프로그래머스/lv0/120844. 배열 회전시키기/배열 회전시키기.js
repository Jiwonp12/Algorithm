function solution(numbers, direction) {
    let result;
    if (direction === 'right') {
        result = numbers.slice(0,-1);
        result.unshift(numbers[numbers.length-1]);
    } else {
       result = numbers.slice(1);
        result.push(numbers[0]);
    }
    return result;
}