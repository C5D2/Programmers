function solution(n, t) {
    let answer = n*(Math.pow(2,t));
    return answer;
}

// function solution(n, t) {
//     for(let i = 1; i <= t; i++) n *= 2;
//     return n
// }