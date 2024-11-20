function solution(str_list) {
    const lIndex = str_list.indexOf('l');
    const rIndex = str_list.indexOf('r');
    const answer = [];
    
    if(lIndex === -1 && rIndex === -1) {
        return answer;
    } 
    
    if(rIndex === -1 || (lIndex !== -1 && lIndex < rIndex)) {
        for (let i = 0; i < lIndex; i++) { 
            answer.push(str_list[i]);
        }
    } else if (lIndex === -1 || (rIndex !== -1 && rIndex < lIndex)) {
        for (let i = rIndex + 1; i < str_list.length; i++) {
            answer.push(str_list[i])
        }
    }
    return answer;
}