/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0; // 0을 나타내는 영역의 오른쪽 경계
    let high = nums.length - 1; // 2를 나타내는 영역의 왼쪽 경계
    let i = 0; // 현재 위치를 나타내는 포인터

    // 현재 위치가 2를 나타내는 영역을 벗어나면 종료
    while (i <= high) {
        if (nums[i] === 0) {
            // 현재 위치의 값이 0이면 0을 나타내는 영역의 오른쪽으로 이동
            [nums[i], nums[low]] = [nums[low], nums[i]]; // 스왑
            low++;
            i++;
        } else if (nums[i] === 2) {
            // 현재 위치의 값이 2이면 2를 나타내는 영역의 왼쪽으로 이동
            [nums[i], nums[high]] = [nums[high], nums[i]]; // 스왑
            high--;
        } else {
            // 현재 위치의 값이 1이면 그대로 유지하고 다음 위치로 이동
            i++;
        }
    }
};