function solution(numbers, target) {
    let result = 0;
    
    const dfs = (idx, num) => {
        if (idx === numbers.length) {
            if (num === target) {
                result++;
            }
            return;
        }
        
        dfs(idx+1, num + numbers[idx]);
        dfs(idx+1, num - numbers[idx]);
    }
    dfs(0,0);
    return result;
}