/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length;
    let k, l;
    for (k = n - 2; k >= 0; k--) {
        if (nums[k] < nums[k + 1]) {
            break;
        }
    }
    if (k < 0) {
        nums.reverse();
    } else {
        for (l = n - 1; l > k; l--) {
            if (nums[l] > nums[k]) {
                break;
            }
        }
        [nums[k], nums[l]] = [nums[l], nums[k]];
        nums.splice(k + 1, n - k - 1, ...nums.slice(k + 1).reverse());
    }
}