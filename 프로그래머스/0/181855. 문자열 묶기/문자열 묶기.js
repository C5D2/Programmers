function solution(strArr) {
    let map = new Map();
    
    for(let str of strArr) {
        const length = str.length;
        map.set(length, (map.get(length) || 0) + 1)
    }
    
    return Math.max(...map.values());
}