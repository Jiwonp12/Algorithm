function solution(progresses, speeds) {
    let result = [];
    while (progresses.length > 0) {
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        if (progresses[0] >= 100) {
            let count = 0;
            while (progresses[0] >= 100) {
                progresses.shift();
                speeds.shift();
                count++;
            }
            result.push(count);
        }
    }
    return result;
}