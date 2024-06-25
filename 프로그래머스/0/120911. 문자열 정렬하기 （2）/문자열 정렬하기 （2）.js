function solution(my_string) {
    let lowerCase =  my_string.toLowerCase();
    let answer = [...lowerCase].sort();
    return answer.join('');
}