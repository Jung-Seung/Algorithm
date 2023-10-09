/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [-1, -1];
    let start = 0, end = nums.length - 1, mid;
    // First occurrence
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (target == nums[mid]) {
            ans[0] = mid;
            end = mid - 1;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    // Last occurrence
    start = 0;
    end = nums.length - 1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (target == nums[mid]) {
            ans[1] = mid;
            start = mid + 1;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return ans;
};