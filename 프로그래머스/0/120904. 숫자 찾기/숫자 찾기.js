function solution(num, k) {
    let arr = Array.from(String(num));
    let answer = arr.findIndex(value => value === String(k));
    return answer === -1 ? -1 : answer + 1;
}