function solution(array) {
    let maxNumber = Math.max(...array);
    let answer = [maxNumber, array.indexOf(maxNumber)];
    return answer;
}