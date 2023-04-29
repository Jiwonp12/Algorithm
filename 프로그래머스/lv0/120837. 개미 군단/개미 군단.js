function solution(hp) {
    let result = 0;
    if (hp % 5 === 0) {
        return hp / 5;
    } 
    result = Math.floor(hp / 5);
    hp = hp % 5;
    if (hp % 3 === 0) {
        return result + hp / 3;
    }
    result = result + Math.floor(hp / 3);
    hp = hp % 3;
    return result = result + hp
}
// 5, 3, 1