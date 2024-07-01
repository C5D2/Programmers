function solution(emergency) {
    let arr = [...emergency].sort((a,b) => b - a);
    let answer = emergency.map((v, i) => arr.indexOf(v) + 1);
    return answer;
}