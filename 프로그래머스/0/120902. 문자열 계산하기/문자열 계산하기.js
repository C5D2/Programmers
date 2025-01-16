function solution(my_string) {
    const arr = my_string;
    var answer = 0;
    for(let i = 0; i < arr.length; i++) {
        if(answer === 0 && !isNaN(Number(arr[i])) || arr[i - 1] === "+" && isNaN(Number(arr[i]))) {
            answer += Number(arr[i])
                        console.log(answer)
        }  else {
            answer -= Number(arr[i])
        }
    }
    return answer;
}