function solution(score) {
    let average = [];
    for (const [eng, math] of score) {
        average.push((eng + math) / 2)
    }
    const sortedAvg = [...average].sort((a, b) => b - a);
    return average.map((item) => sortedAvg.indexOf(item) + 1);
}