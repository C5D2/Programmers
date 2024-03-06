function solution(rank, attendance) {
    let attStudent=[] 
    for( let i = 0; i < attendance.length; i++ ) {
        if(attendance[i]){
            attStudent.push({rank: rank[i], i})
        }
    } attStudent.sort((a, b) => a.rank - b.rank);
    let a = attStudent[0].i;
    let b = attStudent[1].i;
    let c = attStudent[2].i;
    let result = 10000 * a + 100 * b + c;
    return result
}