function solution(arr, idx) {
     const findIndex = arr.slice(idx).findIndex(v => v === 1);
    return findIndex === -1 ? -1 : findIndex + idx;
}