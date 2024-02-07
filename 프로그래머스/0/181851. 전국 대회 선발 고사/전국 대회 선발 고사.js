function solution(rank, attendance) {
    let result = rank.map((x, i) => ({ rank: x, i: i, att: attendance[i] })).filter(x => x.att)
    .sort((a, b) => a.rank - b.rank).slice(0, 3);
    
    return result[0].i * 10000 + result[1].i * 100 + result[2].i;
}