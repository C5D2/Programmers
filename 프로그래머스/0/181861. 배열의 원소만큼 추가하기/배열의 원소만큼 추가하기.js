// function solution(arr) {
//     let X = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i]; j++) {
//             X.push(arr[i]);
//         }
//     }
//     return X;
// }

function solution(arr){
    let X = [];
    arr.forEach(a => {
        for (let i = 0; i < a; i++) {
            X.push(a);
        }
    });
    return X;
}