function solution(N, stages) {
    const clearUsers = new Array(N + 1).fill(0);
    const pauseUsers = new Array(N + 1).fill(0);
    const failRatio = [];
    for(let i = 0; i < stages.length; i++) {
        for(let j = 1; j <= stages[i]; j++) {
            clearUsers[j - 1] += 1
        }
    }
    for(let k = 0; k < stages.length; k++) {
        pauseUsers[stages[k] - 1] += 1
    }
    for(let l = 0; l < N; l++) {
            failRatio.push({
                stage: l + 1,
                ratio: clearUsers === 0 ? 0 : pauseUsers[l] / clearUsers[l]
            })
    }
    const result = failRatio.sort((a, b) => b.ratio - a.ratio);
    
    return result.map((item) => item.stage);
}