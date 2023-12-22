/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // 배열의 끝에서부터 시작하여 처음까지 반복
    for (let i = nums.length - 1; i > 0; i--) {
        // 현재 인덱스보다 작은 인덱스까지 반복
        for (let j = 0; j <= i - 1; j++) {
            // 현재 인덱스의 값이 다음 인덱스의 값보다 크면 스왑
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
            }
        }
    }
};