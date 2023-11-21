/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 시작과 끝 인덱스 초기화
    let start = 0, end = nums.length - 1;
    // 기본값 설정: target이 모든 요소보다 클 때 배열의 길이로 설정
    let ans = nums.length;
    // 이진 검색 수행
    while (start <= end) {
        // 중간 인덱스 계산
        let mid = Math.floor((start + end) / 2);
        // target을 찾은 경우 해당 인덱스 반환
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            // 중간 값이 target보다 작으면 오른쪽 절반 탐색
            start = mid + 1;
        } else {
            // 중간 값이 target보다 크면 왼쪽 절반 탐색
            ans = mid; // 현재 인덱스로 답을 갱신
            end = mid - 1;
        }
    }
    // 결과 반환
    return ans;
};
