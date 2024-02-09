function solution(common) {
    if (common[1] - common[0] === common[2] - common[1]) {
        let add = common[1] - common[0]
        return common[common.length-1] + add;
    }
    
    let ratio = common[common.length-1] / common[common.length-2];
    return common[common.length-1] * ratio;
}