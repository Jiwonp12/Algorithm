function solution(picture, k) {
    return picture.flatMap(x => Array(k).fill(x.split('').map(str => str.repeat(k)).join('')));
}