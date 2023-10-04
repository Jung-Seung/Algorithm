/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // 빈 배열이면 0을 반환

    let result = 1; // 배열의 첫 번째 요소는 이미 고유한 요소이므로 result를 1로 초기화

    for (let i = 1; i < nums.length; i++) {
        // 현재 요소와 이전 요소가 다른 경우, 중복이 아니므로 result를 1 증가시키고
        // nums[result]에 현재 요소를 복사하여 고유한 요소로 처리
        if (nums[i] !== nums[i - 1]) {
            nums[result] = nums[i];
            result++;
        }
    }

    return result; // 고유한 요소의 개수 result를 반환
};