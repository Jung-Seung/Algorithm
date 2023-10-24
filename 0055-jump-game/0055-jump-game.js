/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 마지막 인덱스
    const lastIdx = nums.length - 1;
    
    // 현재까지 도달할 수 있는 최대 인덱스
    let maxIdx = 0;
    
    // 배열을 순회하며 최대 인덱스를 갱신합니다.
    for (let i = 0; i <= maxIdx; i++) {
        maxIdx = Math.max(maxIdx, i + nums[i]);
        // 최대 인덱스가 마지막 인덱스보다 크거나 같으면 true를 반환합니다.
        if (maxIdx >= lastIdx) {
            return true;
        }
    }
    // 최대 인덱스가 마지막 인덱스보다 작으면 false를 반환합니다.
    return false;
};