/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {    
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], 1);
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!m.has(i)) return i;
    }
    return nums.length + 1; // the array is [1,2,...,n]
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    /*
    The worst case (the first missing positive being the greatest) is
    when the array is [1,2..,n]. Therefore, in all other cases except this case, 
    the first missing positive number is less than or equal to n (nums.length).
    */
}