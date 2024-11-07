function solution(order) {
    // let answer = 0;
    // let arr = [...String(order)];
    // for(let i of arr) {
    //     if ( i === '3' || i === '6' || i === '9') {
    //         answer += 1;
    //     }
    // }
    // return answer;
    const answer = order.toString().match(/[369]/g) ?? [];
    return answer.length;
}