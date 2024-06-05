function solution(my_string, letter) {
    let minus_letter = new RegExp(letter, 'g')
    let answer = my_string.replace(minus_letter, '');
    return answer;
}