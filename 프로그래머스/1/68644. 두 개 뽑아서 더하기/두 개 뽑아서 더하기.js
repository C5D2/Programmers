function solution(numbers) {
    let plusArr = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
    plus = numbers[i] + numbers[j];
    plusArr.push(plus);
        }
    }
    const answer = [...new Set(plusArr)].sort((a, b) => a - b);
    return answer;
}