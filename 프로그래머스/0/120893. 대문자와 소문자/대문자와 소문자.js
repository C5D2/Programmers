function solution(my_string) {
    let answer =
    [...my_string].map((e)=>e === e.toUpperCase() ? e.toLowerCase():e.toUpperCase());
    return answer.join("");
}