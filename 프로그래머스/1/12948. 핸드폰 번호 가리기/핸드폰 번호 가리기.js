function solution(phone_number) {
    const answer = [...phone_number];
    for(let i = 0; i < answer.length - 4; i++) {
        answer[i] = "*"
    }
    return answer.join('');
}