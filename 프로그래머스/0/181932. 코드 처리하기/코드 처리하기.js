function solution(code) {
    let mode = 0;
    let ret = '';
    for(let idx = 0; idx < code.length; idx++) {
        if(code[idx] === "1") {
            mode === 0 ? mode = 1 : mode = 0;
        } else {
            if (mode === 0 && idx % 2 === 0) {
            ret += code[idx];
            } else if (mode === 1 && idx % 2 !== 0 && code[idx] != 1) {
            ret += code[idx];
            }
        }      
    }
    return ret === '' ? "EMPTY" : ret;
}