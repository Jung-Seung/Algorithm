/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;

    // 1. 음수와 0을 n+1로 변경하여 처리합니다.
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0) {
            nums[i] = n + 1;
        }
    }

    // 2. 1부터 n까지의 숫자가 배열에 존재하는 경우, 해당 위치의 값을 음수로 변경합니다.
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }

    // 3. 양수인 첫 번째 값의 위치가 누락된 최소 양의 정수입니다.
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    return n + 1; // 1부터 n까지의 숫자가 모두 존재하는 경우
};