function solution(box, n) {
    return box.map(x => Math.floor(x/n)).reduce((acc, cur) => acc*cur);
}


// [가로,세로,높이]
// 10, 8, 6, 3 3 3
// 10/3, 8/3, 6/3 => 3*2*2 = 12