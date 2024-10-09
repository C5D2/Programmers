function solution(numbers) {
    let plusArr = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let k = i + 1; k < numbers.length; k++){
    plus = numbers[i] + numbers[k];
    plusArr.push(plus);
        }
    }
    const answer = [...new Set(plusArr)].sort((a, b) => a - b);
    return answer;
}