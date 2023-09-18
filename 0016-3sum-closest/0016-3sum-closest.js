/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result = Number.MAX_VALUE;
    let number = Number.MAX_VALUE;

    nums.sort((a, b) => a - b);

    for (let start = 0; start < nums.length; start++) {
        let left = start+1;
        let right = nums.length-1;

        while (left < right) {
            if (Math.abs(target - (nums[start] + nums[left] + nums[right])) < number) {
                result = nums[start] + nums[left] + nums[right];
                number = Math.abs(target - (nums[start] + nums[left] + nums[right]));
            }
            if (nums[start] + nums[left] + nums[right] > target) {
                right--;
            } else if (nums[start] + nums[left] + nums[right] == target) {
                break;
            } else {
                left++;
            }
        }
    }
    return result;
};