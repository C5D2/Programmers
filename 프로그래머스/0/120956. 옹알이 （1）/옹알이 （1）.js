// function solution(babbling) {
//     let voca = ["aya", "ye", "woo", "ma"];
//     let possibleVoca = [...voca];
//     for(let i = 0; i < voca.length; i++) {
//         for(let j = 0; j < voca.length; j++)
//             if(i !== j){
//             possibleVoca.push(voca[i] + voca[j]);
//                 for(let k = 0; k < voca.length; k++){                    
//                     if(i !== k && j !== k){
//                     possibleVoca.push(voca[i] + voca[j] + voca[k]);
//                 for(let l = 0; l < voca.length; l++){
//                     if(i !== l && j !== l && k !== l){
//                     possibleVoca.push(voca[i] + voca[j] + voca[k] + voca[l]);
//                     }
//                 }
//     }}}};
//     const answer = babbling.filter((value) => possibleVoca.includes(value));
//     return answer.length;
// }

// function solution(babbling) {
//     const voca = ["aya", "ye", "woo", "ma"];
    
//     return babbling.filter(word => {
//         let temp = word;
//         for (let v of voca) {
//             if (temp.includes(v.repeat(2))) return false; 
//             temp = temp.split(v).join(' ');
//         }
//         return temp.trim().length === 0;
//     }).length;
// }
function solution(babbling) {
    const wordSet = new Set(["aya", "ye", "woo", "ma"])
    let result = 0;

    for(const word of babbling) {
        let remainWord = '';
        let prevWord = '';
        for(const char of word) {
            remainWord += char;
            if(wordSet.has(remainWord)) {
                if(remainWord === prevWord) break;
                prevWord = remainWord
                remainWord = ''
            }
        }
        if(remainWord === '') result++
    }
    return result;
}