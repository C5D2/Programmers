function solution(progresses, speeds) {
    const answer = [];
    const finishDays = [];
    
    for (let i = 0; i < progresses.length; i++) {
        const days = Math.ceil((100 - progresses[i]) / speeds[i]);
        finishDays.push(days);
    }
    
    while (finishDays.length > 0) {
        let count = 1;
        const standardDay = finishDays[0];
        
        for (let i = 1; i < finishDays.length; i++) {
            if (finishDays[i] <= standardDay) {
                count ++;
            } else {
            break;
            }
        }
        
        finishDays.splice(0, count);
        answer.push(count);
    }
    
    return answer;
}