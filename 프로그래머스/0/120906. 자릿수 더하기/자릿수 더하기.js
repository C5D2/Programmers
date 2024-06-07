function solution(n) {
let answer = (n+"").split("").reduce((acc, cur) => acc + Number(cur), 0);
return answer;
}