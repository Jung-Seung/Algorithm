/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            // 왼쪽 절반이 정렬되어 있는 경우
            if (nums[left] <= target && target < nums[mid]) {
                // 타겟이 왼쪽 절반에 속하는 경우
                right = mid - 1;
            } else {
                // 타겟이 오른쪽 절반에 속하는 경우
                left = mid + 1;
            }
        } else {
            // 오른쪽 절반이 정렬되어 있는 경우
            if (nums[mid] < target && target <= nums[right]) {
                // 타겟이 오른쪽 절반에 속하는 경우
                left = mid + 1;
            } else {
                // 타겟이 왼쪽 절반에 속하는 경우
                right = mid - 1;
            }
        }
    }

    return -1; // 타겟을 찾지 못한 경우
};