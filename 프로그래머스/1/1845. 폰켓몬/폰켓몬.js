// function solution(nums) {
//     const getNum = Math.floor(nums.length / 2);
//     const newArray = nums.filter((v, i) => { return nums.indexOf(v) === i});
//     return getNum <= newArray.length ? getNum : newArray.length;
// }

function solution(nums) {
    const uniqueTypes = new Set(nums); // 중복을 제거하여 폰켓몬 종류 수를 구함
    const maxSelection = nums.length / 2; // 선택할 수 있는 최대 수

    // 최대 선택 가능한 폰켓몬 수와 실제 종류 수 중 최소값을 반환
    return Math.min(uniqueTypes.size, maxSelection);
}