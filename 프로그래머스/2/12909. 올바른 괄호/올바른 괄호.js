function solution(s){
    let pair = 0;
    
    for(let i = 0; i < s.length; i++) {
        s[i] === "(" ? pair += 1 : pair -= 1
        if(pair < 0) {
            break;
        }
    }
    
    return pair === 0 ? true : false;
}