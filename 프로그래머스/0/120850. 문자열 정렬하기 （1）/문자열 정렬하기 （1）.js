function solution(my_string) {
    let answer =[...my_string].filter((v)=>!isNaN(v)).map((v)=>Number(v)).sort();
    return answer;
}