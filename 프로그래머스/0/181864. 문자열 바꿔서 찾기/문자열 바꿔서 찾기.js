function solution(myString, pat) {
    // let answer ='';
    // for(let i = 0; i < myString.length; i++) {
    //     if(myString[i] === 'A') {
    //         answer += 'B';
    //     } else {
    //         answer += 'A';
    //     }
    // }
    const answer = myString.split('').map((char) => char === 'A' ? 'B' : 'A').join('');
    return answer.includes(pat) ? 1 : 0;
}