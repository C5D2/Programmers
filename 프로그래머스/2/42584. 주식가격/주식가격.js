function solution(prices) {
    const indexStack = [];
    const answer = new Array(prices.length).fill(0)
    for (let i = 0; i < prices.length; i++) {
        while (indexStack.length > 0 && prices[indexStack[indexStack.length - 1]] > prices[i]) {
           const j = indexStack.pop();
            answer[j] = i - j;
        }
            indexStack.push(i);
        }
    while (indexStack.length > 0) {
        const k = indexStack.pop();
        answer[k] = prices.length - 1 - k;
        console.log(answer);
     }
    return answer;
}