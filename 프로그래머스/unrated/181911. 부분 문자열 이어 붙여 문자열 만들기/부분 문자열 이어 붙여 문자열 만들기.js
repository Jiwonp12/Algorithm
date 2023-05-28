function solution(my_strings, parts) {
  let result = '';

  for (let i = 0; i < my_strings.length; i++) {
    const [a, b] = parts[i];
    const str = my_strings[i];
    const part = str.slice(a, b + 1);
    result += part;
  }

  return result;
}