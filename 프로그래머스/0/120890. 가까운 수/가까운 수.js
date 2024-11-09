function solution(array, n) {
    const sortArray = [...array];
    sortArray.push(n);
    sortArray.sort((a, b) => a - b);
    const nIndex = sortArray.indexOf(n);
    if (nIndex === 0) {
        return sortArray[1]
    };
    if (nIndex === sortArray.length - 1) {
        return sortArray[nIndex - 1]
    }
    if (n - sortArray[nIndex - 1] > sortArray[nIndex + 1] - n) {
        return sortArray[nIndex + 1]
    } else {
        return sortArray[nIndex - 1]
    }
}