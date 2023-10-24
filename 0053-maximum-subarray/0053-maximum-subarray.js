/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 최대 부분 배열의 합을 저장할 변수를 선언합니다.
    let maxSum = nums[0];
    // 현재까지의 부분 배열의 합을 저장할 변수를 선언합니다.
    let currentSum = nums[0];

    // 배열의 두 번째 요소부터 순회하면서 최대 부분 배열의 합을 찾습니다.
    for (let i = 1; i < nums.length; i++) {
        // 현재 요소를 현재까지의 부분 배열의 합에 더합니다.
        // 다만, 현재 요소 자체가 더 큰 경우에는 현재 요소부터 새로운 부분 배열을 시작합니다.
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // 최대 부분 배열의 합을 갱신합니다.
        maxSum = Math.max(maxSum, currentSum);
    }

    // 최대 부분 배열의 합을 반환합니다.
    return maxSum;
};