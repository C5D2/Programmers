function solution(sizes) {
    let max = [];
    let min = [];
    for (let size of sizes) {
        let [w, h] = size;
        max.push(Math.max(w, h));
        min.push(Math.min(w, h));
    }
    const maxMaxNum = max.reduce((a, b) => Math.max(a, b));
    const minMaxNum = min.reduce((a, b) => Math.max(a, b));
    return maxMaxNum * minMaxNum;
}