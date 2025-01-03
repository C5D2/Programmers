function solution(numbers) {
    numbers.sort((a, b) => b - a);
    const positiveNum = numbers[0] * numbers[1];
    const negativeNum = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    return Math.max(positiveNum, negativeNum);
}