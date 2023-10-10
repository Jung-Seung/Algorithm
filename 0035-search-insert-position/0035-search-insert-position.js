/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0, end = nums.length - 1;
    let ans = nums.length; // Default answer when target is greater than all elements
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            ans = mid; // Update the answer to the current index
            end = mid - 1;
        }
    }
    
    return ans;
};