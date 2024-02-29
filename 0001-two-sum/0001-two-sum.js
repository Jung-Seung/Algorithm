/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 배열을 순회하며 두 수의 합이 타겟과 같은지 확인
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            // 두 수의 합이 타겟과 같으면 해당 인덱스 반환
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return []; // 정답이 없는 경우 빈 배열 반환
};