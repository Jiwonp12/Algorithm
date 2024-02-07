function solution(a, b, c, d) {
    let dice = [a, b, c, d].sort((a, b) => a - b);
    
    if (dice[0] === dice[3]) {
        return dice[0] * 1111;
    }
    
    if (dice[0] === dice[2] || dice[1] === dice[3]) {
        let dice2 = dice[0] === dice[2] ? dice[3] : dice[0];
        return Math.pow(10 * dice[2] + dice2, 2);
    }
    
    if (dice[0] === dice[1] && dice[2] === dice[3]) {
        return (dice[0] + dice[2]) * (Math.abs(dice[0] - dice[2]));
    }
    
    if (dice[0] === dice[1] || dice[1] === dice[2] || dice[2] === dice[3]) {
        return dice[0] === dice[1] ? dice[2] * dice[3] : dice[1] === dice[2] ? dice[0] * dice[3] : dice[0] * dice[1];
    }
    
    return dice[0];
}