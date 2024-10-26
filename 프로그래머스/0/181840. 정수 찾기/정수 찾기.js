function solution(num_list, n) {
    const answer = num_list.includes(n);
    return answer ? 1 : 0;
}