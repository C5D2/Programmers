function solution(n,a,b)
{
    let round = 0;
    
    // for(; a !== b; round++) {
    while(a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round ++;
    }
    return round;
}