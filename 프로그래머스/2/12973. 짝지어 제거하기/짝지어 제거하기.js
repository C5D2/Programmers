function solution(s) {
    const stack = [];
    
    for (let e of s) {
        if (stack.length > 0 && stack[stack.length - 1] === e) {
            stack.pop();
    } else {
    stack.push(e);
    }
}

    return stack.length > 0 ? 0 : 1;
}