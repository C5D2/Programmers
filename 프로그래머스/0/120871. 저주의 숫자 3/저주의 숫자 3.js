function solution(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        do {
            count++;
        } while (count.toString().includes('3') || count % 3 === 0);
    }  
    return count;
}