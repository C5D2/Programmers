function solution(n) {
    // let map = new Map();
    // for(let i = 1; i <= n; i++) {
    //     if(n % i === 0) {
    //         map.set(i, n / i)
    //     }
    // }
    // return map.size;
    let count = 0;
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            count += n / i === i ? 1 : 2;
        }
    }
    return count;
}