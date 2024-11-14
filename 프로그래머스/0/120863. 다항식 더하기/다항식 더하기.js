function solution(polynomial) {
    const pol = polynomial.split(' ');
    let xResult = 0;
    let nResult = 0;

    const answer = [];
    pol.forEach((v) => {
        if (v.includes('x')) {
            xResult += +(v.replace('x', '') || 1);
        } else if (!isNaN(+v)) {
            nResult += Number(v);
        }
    });
    if(xResult !== 0) { answer.push(xResult === 1 ? 'x' : xResult + 'x')};
    if(nResult !== 0) {answer.push(nResult)};
    
    return answer.length === 0 ? 0 : answer.join(' + ');
}