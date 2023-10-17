/**
 * @param {number[]} nums
 * @return {number}
 */
 /*
    1. 주어진 배열을 순회하면서 각 위치에서의 최대 점프 범위를 계산합니다.
    2. 현재 위치에서의 최대 점프 범위가 현재 인덱스를 벗어나면 점프 횟수를 증가시키고 최대 점프 범위를 업데이트합니다.
    3. 배열의 끝까지 이 과정을 반복하여 최소 점프 수를 찾습니다.
 */
var jump = function(nums) {
    let n = nums.length;
    if (n < 2) return 0;
    
    let maxPosition = nums[0];
    let maxSteps = nums[0];
    let jumps = 1;
    
    for (let i = 1; i < n; i++) {
        if (maxSteps < i) {
            jumps++;
            maxSteps = maxPosition;
        }
        maxPosition = Math.max(maxPosition, nums[i] + i);
    }
    
    return jumps;
};