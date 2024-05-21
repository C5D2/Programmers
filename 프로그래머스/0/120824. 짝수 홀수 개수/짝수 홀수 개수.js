function solution(num_list) {
    var answer = [0, 0];
    for(let item of num_list){
        answer[item % 2] += 1
    }
    return answer;
}