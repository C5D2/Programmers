function solution(babbling) {
    let voca = ["aya", "ye", "woo", "ma"];
    let possibleVoca = [...voca];
    for(let i = 0; i < voca.length; i++) {
        for(let j = 0; j < voca.length; j++)
            if(i !== j){
            possibleVoca.push(voca[i] + voca[j]);
                for(let k = 0; k < voca.length; k++){                    
                    if(i !== k && j !== k){
                    possibleVoca.push(voca[i] + voca[j] + voca[k]);
                for(let l = 0; l < voca.length; l++){
                    if(i !== l && j !== l && k !== l){
                    possibleVoca.push(voca[i] + voca[j] + voca[k] + voca[l]);
                    }
                }
    }}}};
    const answer = babbling.filter((value) => possibleVoca.includes(value));
    return answer.length;
}