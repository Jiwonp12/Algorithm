function solution(numbers) {
    const strArr = numbers.map(num => String(num));
    if (strArr.every(str => str === "0")) {
        return "0";
  }
    return strArr.sort((a, b) => (b + a) - (a + b)).join('');
}