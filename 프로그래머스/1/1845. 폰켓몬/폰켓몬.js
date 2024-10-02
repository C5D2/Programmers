function solution(nums) {
    const getNum = Math.floor(nums.length / 2);
    const newArray = nums.filter((v, i) => { return nums.indexOf(v) === i});
    result = getNum <= newArray.length ? getNum : newArray.length;
    return result;
}