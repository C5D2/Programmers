function solution(numlist, n) {
    
    const sortArr = numlist.sort((a, b) => {
        const compareA = Math.abs(n - a);
        const compareB = Math.abs(n - b);
        if(compareA === compareB) {
            return b - a;
        }
        return compareA - compareB;
    })
    
    return sortArr;
}