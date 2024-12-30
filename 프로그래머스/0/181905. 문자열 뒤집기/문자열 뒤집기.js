function solution(my_string, s, e) {
    const arr = [...my_string];
    const reverseArr = [...my_string].slice(s, e + 1).reverse();
    arr.splice(s, e - s + 1, ...reverseArr)
    return arr.join('');
}