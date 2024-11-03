function solution(myString) {
    const prevI = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]
    let result = "";
    for(let i = 0; i < myString.length; i++) {
        if(prevI.includes(myString[i])) {
            result += "l";
        }
        else result += myString[i];
    }
    return result;
}