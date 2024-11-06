function solution(num, total) {
    const result = [];
    const x = (total - (num * (num - 1) / 2)) / num ;
    for(let i = x; i <= x + num - 1; i++) {
        result.push(i);        
    }
    
    return result;
}