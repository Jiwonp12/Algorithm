function solution(numbers) {
  const numObj = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  };
    
  let result = '';
  let str = '';
  for (let i = 0; i < numbers.length; i++) {
    let char = numbers.charAt(i);
    str += char;
    if (str in numObj) {
      result += numObj[str];
      str = '';
    }
  }
  return Number(result);
}