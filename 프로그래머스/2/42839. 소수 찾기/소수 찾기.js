function solution(numbers) {
    const numbersArr = numbers.split('')
    const visited = new Array(numbers.length).fill(false);
    const result = new Set();
    
    const combine = (str) => {
        if (str.length > 0) {
            result.add(Number(str));
        }
        
        for (let i = 0; i < numbersArr.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                combine(str + numbersArr[i]);
                visited[i] = false;
            }
        }
    }
    combine('');

    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    return [...result].filter(isPrime).length;
}