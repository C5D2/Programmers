function solution(N, stages) {
    const clear_users = new Array(N + 1).fill(0);
    const pause_users = new Array(N + 1).fill(0);
    const fail_ratio = [];
    for(let i = 0; i < stages.length; i++) {
        for(let j = 1; j <= stages[i]; j++) {
            clear_users[j - 1] += 1
        }
    }
    for(let k = 0; k < stages.length; k++) {
        pause_users[stages[k] - 1] += 1
    }
    for(let l = 0; l < N; l++) {
            fail_ratio.push({
                stage: l + 1,
                ratio: clear_users === 0 ? 0 : pause_users[l] / clear_users[l]
            })
    }
    const result = fail_ratio.sort((a, b) => b.ratio - a.ratio);
    
    return result.map((item) => item.stage);
}