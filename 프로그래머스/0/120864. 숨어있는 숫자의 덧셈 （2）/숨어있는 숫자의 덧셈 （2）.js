function solution(my_string) {
    let total = 0;
    let current = '';
    for (let char of my_string) {
        if (!isNaN(char)) {
            current += char
        } else {
            total += Number(current);
            current = '';
        }
    }
    if (current) {
        total += Number(current);
    }
    return total;
}