function solution(before, after) {
    let before2 = before.split('').sort().join('');
    let after2 = after.split('').sort().join('');
    return before2 === after2 ? 1 : 0;
}