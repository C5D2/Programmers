function solution(n) {
    const numbers = [];
    for (let i = 3; i <= n; i++) {
        for (let k = 2; k < i; k++) {
            if(i % k === 0) {
                numbers.push(i);
                break;
            }
        }
    }
    return numbers.length;
}