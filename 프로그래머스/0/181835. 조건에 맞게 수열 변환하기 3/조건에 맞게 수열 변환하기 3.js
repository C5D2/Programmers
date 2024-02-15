// function solution(arr, k) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = (k % 2 === 0) ? arr[i] + k : arr[i] * k;
//   }
//   return arr;
// }

function solution(arr, k) {
  return arr.map((item, index) => (k % 2 === 0) ? item + k : item * k);
}