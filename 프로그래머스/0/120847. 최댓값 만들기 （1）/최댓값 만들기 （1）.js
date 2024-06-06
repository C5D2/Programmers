function solution(numbers) {
    let array = numbers.sort((a,b)=>b-a);
    let maxNumbers = array.splice(0, 2);
    let answer = maxNumbers[0]*maxNumbers[1];
    return answer;
}