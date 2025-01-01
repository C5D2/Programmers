function solution(n) {
    let map = new Map();
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            map.set(i, n / i)
        }
        console.log(map)
    }
    return map;
}