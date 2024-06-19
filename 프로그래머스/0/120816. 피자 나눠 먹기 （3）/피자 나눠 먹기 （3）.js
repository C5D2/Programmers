function solution(slice, n) {
    let answer = n%slice === 0 ? Math.floor(n/slice) : Math.floor(n/slice) + 1;
    return answer;
}