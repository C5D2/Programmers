function solution(my_string) {
    let numbers = [];
    for(let string of my_string.split("")){
        if (!isNaN(Number(string)))
            numbers.push(Number(string))
    }
    const answer = numbers.reduce((acc, cur) => acc + cur);
    return answer;
}