function solution(arr, query) {
    let answer = [...arr];
    for (let i = 0; i < query.length; i++) {
        if(i % 2 === 0) {
            answer = answer.slice(0, query[i] + 1);
            console.log(answer)
        } else {
            answer = answer.slice(query[i]);
        }
    }
    return answer;
}