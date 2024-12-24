function solution(array) {
    const count = new Array(1000).fill(0);
    if(array.length === 1) {
        return array[0];
    }
    // if(array.length === 0) {
    //     return -1;
    // }
    for(let i = 0; i < array.length; i++) {
        count[array[i]] ++;
    }
    console.log(count)
    const countSort = count.map((value, index) => [value, index]).sort((a, b) => b[0] - a[0]);
    console.log(countSort);
    const maxNumber = countSort.length > 1 && countSort[0][0] === countSort[1][0] ? -1 : countSort[0][1];
    return maxNumber;
}