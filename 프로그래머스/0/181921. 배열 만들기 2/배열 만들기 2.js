function solution(l, r) {
    const answer = [];
    for(let i = l; i <= r; i++) {
        if(String(i).split('').every((char) => char === '0' || char === '5')) {
            answer.push(i);
        }
    }
    
    return answer.length === 0 ? [-1] : answer;
}