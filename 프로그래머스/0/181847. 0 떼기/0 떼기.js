function solution(n_str) {
    var answer = n_str;
    for(let i = 0; i < n_str.length; i++) {
        if(n_str[i] == 0) {
            answer = n_str.slice(i + 1);
        }
        else if(n_str[i] !== 0) {
            break;
        }
    }
    return answer;
}