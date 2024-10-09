function solution(numbers) {
    const plusArr = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            plusArr.push(numbers[i] + numbers[j])
        }
    }
    return [...new Set(plusArr)].sort((a, b) => a - b)
}