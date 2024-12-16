function solution(brown, yellow) {
    const totalSize = brown + yellow;
    // 가로 최소 3cm, 제곱근으로 효율화
    for(let y = 3; y <= Math.sqrt(totalSize); y++) {
        if(totalSize % y === 0) {
            const x = totalSize / y;
            if(yellow === (x-2) * (y-2)) {
                return [x, y];
            }
        }
    }
    return [];
}