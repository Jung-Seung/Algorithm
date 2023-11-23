/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // 정수를 저장할 맵 생성
    let m = new Map();

    // 배열의 각 요소를 맵에 추가
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], 1);
    }
    // 1부터 배열 길이까지의 숫자 중 맵에 없는 첫 번째 숫자 반환
    for (let i = 1; i <= nums.length; i++) {
        if (!m.has(i)) {
            return i;
        }
    }
    // 모든 숫자가 존재하면 배열 길이보다 1 큰 값을 반환
    return nums.length + 1;
};
// Time Complexity: O(n)
// Space Complexity: O(n)
