function solution(i, j, k) {
    const numbers = [];
    for (l = i; l <= j; l++) {
        numbers.push(l);
    }
    return  numbers.join('').split('').filter((v) => v == k).length;
}