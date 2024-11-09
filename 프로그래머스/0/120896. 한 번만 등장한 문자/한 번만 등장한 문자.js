function solution(s) {
    var answer = '';
    return [...s].filter((v, i) => s.indexOf(v) === s.lastIndexOf(v)).sort().join('');
}