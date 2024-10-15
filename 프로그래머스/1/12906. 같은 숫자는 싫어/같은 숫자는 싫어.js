function solution(arr)
{
    let answer = [];
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    arr.reduce((acc, cur) => {
        if(acc !== cur) answer.push(cur)
    return cur}, null);
    
    return answer;
}