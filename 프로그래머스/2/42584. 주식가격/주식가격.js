function solution(prices) {
    let result = [];
    
    for (let i = 0; i < prices.length; i++) {
        let second = 0;
        let price = prices[i];
        for (let j = i+1; j < prices.length; j++) {         
            second++;
            if (price > prices[j]) {
                result.push(second);
                break;
            }
            if (j === prices.length-1) {
                result.push(second);
            }
        }
    }
    result.push(0);
    return result;
}