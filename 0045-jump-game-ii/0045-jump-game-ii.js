/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const size = nums.length;
    // 목적지는 배열의 마지막 인덱스
    let destination = size - 1;
    // 현재까지의 범위와 마지막 점프 인덱스 초기화
    let curCoverage = 0, lastJumpIdx = 0;
    // 점프 횟수 초기화
    let timesOfJump = 0;
    // 시작 인덱스와 도착 인덱스가 0일 경우 빠른 결과 반환
    if (size === 1) {
        return 0;
    }
    // 탐욕적 전략: 가능한 한 먼 거리로 점프하기
    for (let i = 0; i < size; i++) {
        // 현재까지의 범위를 확장
        curCoverage = Math.max(curCoverage, i + nums[i]);
        // 현재 인덱스에서 강제로 점프하여 범위를 확장
        if (i === lastJumpIdx) {
            lastJumpIdx = curCoverage;
            timesOfJump++;
            // 목적지에 도달했는지 확인
            if (curCoverage >= destination) {
                return timesOfJump;
            }
        }
    }
    return timesOfJump;
};
