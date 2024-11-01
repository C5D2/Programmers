function solution(A, B) {
    let newStr = A;
    if (A === B) return 0;
    for(let i = 0; i < A.length; i++) {
      newStr = newStr[newStr.length - 1] + newStr.slice(0, [newStr.length - 1]);
        console.log(newStr)
        if (newStr === B) {
        return i + 1;
        }
    }
    return -1;
}