function solution(num_list) {
    const [last, prev] = [...num_list].reverse();
    return [...num_list, last > prev ? last - prev : last * 2];
}