function solution(str1, str2) {
    let answer = str1.search(str2) >= 0 ? 1 : 2; 
    return answer;
}