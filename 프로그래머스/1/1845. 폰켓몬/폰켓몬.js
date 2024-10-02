function solution(nums) {
    const getNum = Math.floor(nums.length / 2);
    const newArray = nums.filter((v, i) => { return nums.indexOf(v) === i});
    return getNum <= newArray.length ? getNum : newArray.length;
}