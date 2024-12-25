function solution(word) {
    const vowel = ["A", "E", "I", "O", "U"];
    let count = 0;
    let toggle = false;
    
    const backtrack = (current) => {
        if(current === word) {
            toggle = true;
            return;
        }
        
        if(current.length === 5) return;
        
        for(let i = 0; i < vowel.length; i++) {
            if(toggle) return;
            count++;
            backtrack(current + vowel[i]);
        }
    }
    
    backtrack("");
    return count;
}