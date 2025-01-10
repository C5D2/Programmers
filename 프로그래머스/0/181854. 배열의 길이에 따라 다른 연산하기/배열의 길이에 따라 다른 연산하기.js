function solution(arr, n) {
    const answer = [...arr];
    for(let i = 0; i < arr.length; i++) {
        if(arr.length % 2 !== 0) {
            if(i % 2 == 0) {
                answer[i] = arr[i] + n;
            }
        }
        if(arr.length % 2 == 0) {
                if(i % 2 !== 0) {
                    answer[i] = arr[i] + n;
                }
            }
        }
    return answer;
}