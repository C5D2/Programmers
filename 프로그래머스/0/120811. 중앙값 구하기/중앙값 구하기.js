function solution(array) {
    let answer = array.sort((a,b)=>a-b).at(Math.floor(array.length/2));
    return answer;
}