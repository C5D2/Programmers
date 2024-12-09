function solution(a, b) {
    const stringAB = a.toString() + b.toString();
    const stringBA = b.toString() + a.toString();
    const answer = Number(stringAB) >= Number(stringBA) ? stringAB : stringBA;
    return +answer;
}