function solution(arr, delete_list) {
    let set = new Set(delete_list);
    return arr.filter((v) => !set.has(v));
}