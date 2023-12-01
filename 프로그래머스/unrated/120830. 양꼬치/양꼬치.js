// function solution(n, k) {
//     let answer = n * 12000 + k * 2000 - parseInt(n/10) * 2000
//     return answer;
// }

// function solution(n, k) {
//     let answer = n * 12000 + k * 2000 - Math.trunc(n/10) * 2000
//     return answer;
// }

function solution(n, k) {
    let answer = n * 12000 + k * 2000 - Math.floor(n/10) * 2000
    return answer;
}
