function solution(arr, flag) {
    const X = [];
    for(let i = 0; i < flag.length; i++) {
        if(flag[i]) {
            X.push(...Array(arr[i]*2).fill(arr[i]));
        } else {
            X.splice(-arr[i]);
        }
    }
    return X;
}