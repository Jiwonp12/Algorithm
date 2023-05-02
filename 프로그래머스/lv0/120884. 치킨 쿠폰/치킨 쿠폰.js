function solution(chicken) {
    let result = 0;
    while (chicken >= 10) {
        const n = Math.floor(chicken / 10);
        result += n;
        chicken = (chicken % 10) + n;
    }
    return result;
}