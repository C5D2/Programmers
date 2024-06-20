function solution(my_string) {
    const vowel = 'aeiou';
    let answer = my_string.split('').filter((e)=>!vowel.includes(e)).join('');
    return answer;
}