function solution(age) {
    //   let obj = {
    //     0 : "a",
    //     1 : "b",
    //     2 : "c",
    //     3 : "d",
    //     4 : "e",
    //     5 : "f",
    //     6 : "g",
    //     7 : "h",
    //     8 : "i",
    //     9 : "j"
    // }
    // let age962 = age + "";
    // return age962.split("").map((element) => obj[element]).join("");
    const alpha = "abcdefghij";
    return Array.from(age.toString()).map((v) => alpha[v]).join("")
}