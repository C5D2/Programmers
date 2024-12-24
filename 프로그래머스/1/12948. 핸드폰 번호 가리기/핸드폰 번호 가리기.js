function solution(phone_number) {
    // const answer = [...phone_number];
    // for(let i = 0; i < answer.length - 4; i++) {
    //     answer[i] = "*"
    // }
    // return answer.join('');
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}