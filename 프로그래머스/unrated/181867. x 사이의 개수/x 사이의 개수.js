function solution(myString) {
  let result = [];
  let count = 0;

  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === 'x') {
      result.push(count);
      count = 0;
    } else {
      count++;
    }
  }

  result.push(count);
  return result;
}