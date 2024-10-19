function solution(array, commands) {
    let answer = [];
    for(let command of commands){
        const [i, j, k] = command;
        const sliceArr = array.slice(i - 1, j);
        const sortedSliceArr = sliceArr.sort((a, b) => a - b);
        answer.push(sortedSliceArr[k - 1]);
    }
    return answer;
}