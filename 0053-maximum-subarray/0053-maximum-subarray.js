/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let max = -Infinity;  // 최대 연속 부분 배열의 합을 저장하는 변수 (음수 무한대로 초기화)
    let meh = 0;  // 현재까지의 연속 부분 배열의 합을 저장하는 변수
    // 배열을 순회하면서 최대 연속 부분 배열의 합을 찾음
    for (let i = 0; i < nums.length; i++) {
        meh += nums[i];  // 현재 원소를 현재까지의 합에 추가
        // 만약 현재까지의 합이 최대값보다 크다면 최대값 갱신
        if (meh > max) {
            max = meh;
        }
        // 현재까지의 합이 음수라면 0으로 초기화 (부분 배열의 시작 위치를 변경)
        if (meh < 0) {
            meh = 0;
        }
    }
    return max;  // 최대 연속 부분 배열의 합 반환
};
