function solution(my_string, is_suffix) {
    let suffix = [];
    for(let i = 0; i < my_string.length; i++) {
        suffix.push(my_string.slice(i))
    }
    const answer = suffix.filter((value) => value === is_suffix);
    return answer.length > 0 ? 1 : 0;
}