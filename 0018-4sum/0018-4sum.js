/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = new Array();
    let check = new Array();

    nums.sort((a, b) => {return a - b});

    for (let i = 0; i < nums.length-3; i++) {
        let newTarget = target - nums[i];
        for (let j = i+1; j < nums.length-2; j++) {
            let left = j+1;
            let right = nums.length-1;
            while (left < right) {
                if (nums[j] + nums[left] + nums[right] === newTarget) {
                    let temp = [nums[i], nums[j], nums[left], nums[right]];
                    if (check.indexOf(temp.toString()) == -1) {
                        check.push(temp.toString());
                        result.push(temp);
                    }
                    left++;
                    right--;
                } else if (nums[j] + nums[left] + nums[right] < newTarget) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
};