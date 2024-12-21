function solution(names) {
    let head = [];
    for(let i = 0; i < names.length; i++) {
        if(i % 5 === 0) {
            head.push(names[i]);
        }
    }
    return head;
}