/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let r = 0; // 유효한 요소의 개수를 나타내는 변수 r을 0으로 초기화

    for (let i = 0; i < nums.length; i++) {
        // 현재 요소가 val과 같지 않으면 nums[r]에 복사하여 유효한 요소로 처리
        if (nums[i] !== val) {
            nums[r] = nums[i];
            r++;
        }
    }

    return r; // 유효한 요소의 개수 r을 반환
};