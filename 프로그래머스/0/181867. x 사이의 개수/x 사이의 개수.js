function solution(myString) {
    const answer = [];
    let count = 0;
    for(let char of myString) {
        if(char !== "x") {
            count ++;
        } else {
            answer.push(count);
            count = 0;
        } 
    }
    answer.push(count);
    return answer;
}