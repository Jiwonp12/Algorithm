function solution(priorities, location) {
    let que = priorities.map((x, idx) => ({ x, idx }));
    let count = 0;
    while (que.length > 0) {
        let current = que.shift();
        if (que.some(x => x.x > current.x)) {
            que.push(current);
        } else {
            count++;
            if (current.idx === location) {
                return count;
            }
        }
    }
}
