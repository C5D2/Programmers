// function solution(participant, completion) {
//     const allArray = [...participant, ...completion];
//     const nameCounts = allArray.reduce((acc, name) => {
//         acc[name]=(acc[name] || 0) + 1;
//         return acc;}, {});
//     const answer = Object.keys(nameCounts).filter(name=>nameCounts[name] % 2 !== 0);
//     return answer.toString();
// }

function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    for(var i = 0 ; i < participant.length; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];
            break;
        }
    }
    return answer;
}
