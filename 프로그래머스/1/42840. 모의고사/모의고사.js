function solution(answers) {
    const patterns = [ 
        [1, 2, 3, 4, 5], 
        [2, 1, 2, 3, 2, 4, 2, 5], 
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    const getScore = (pattern) => answers.reduce((score, answer, index) => 
        score + (answer === pattern[index % pattern.length] ? 1 : 0), 0
    );
    
    const scores = patterns.map(getScore);
    const maxScore = Math.max(...scores);
    
    const result = scores.map((score, index) => score === maxScore ? index + 1 : null).filter((num) => num !== null);
    
    return result;
}