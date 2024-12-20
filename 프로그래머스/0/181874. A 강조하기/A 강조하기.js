function solution(myString) {
    let result = "";
    for(let i = 0; i < myString.length; i++) {
        if(myString[i] === "a") {
            result += myString[i].toUpperCase();
        } else if(myString[i] !== "A") {
            result += myString[i].toLowerCase();
        } else {
            result += myString[i];
        }
    }
    return result;
}