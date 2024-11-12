function solution(s) {
    const characters = s.split(' ')
    let answer = 0;
    for (let i = 0; i < characters.length; i++) {
        if ( characters[i] === 'Z') {
            characters.splice(i, 1, -characters[i - 1])
        }
        answer += +characters[i]
    }
    return answer;
}