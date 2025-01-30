function solution(num_list) {
    let oddPositionTotal = 0;
    let evenPositionTotal = 0;
    for(let i = 0; i < num_list.length; i++) {
        if(i % 2 === 0) {
            oddPositionTotal += num_list[i];
        } else if(i % 2 !== 0){
            evenPositionTotal += num_list[i];
        }
    }
    return Math.max(oddPositionTotal, evenPositionTotal);
}