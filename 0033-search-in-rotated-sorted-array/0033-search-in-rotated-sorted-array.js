/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 시작 인덱스와 끝 인덱스 초기화
    let start = 0, end = nums.length - 1;
    // 중간 인덱스 초기화
    let mid = Math.floor((start + end) / 2);
    // 이진 검색 수행
    while (start <= end) {
        // 중간 값이 타겟과 일치하면 해당 인덱스 반환
        if (target === nums[mid]) {
            return mid;
        }
        // 왼쪽 절반이 정렬되어 있는 경우
        if (nums[start] <= nums[mid]) {
            // 타겟이 현재 범위에 속하면 오른쪽 절반을 탐색
            if (nums[start] <= target && nums[mid] >= target) {
                end = mid - 1;
            } else {
                // 그렇지 않으면 왼쪽 절반을 탐색
                start = mid + 1;
            }
        } else {
            // 오른쪽 절반이 정렬되어 있는 경우
            // 타겟이 현재 범위에 속하면 왼쪽 절반을 탐색
            if (nums[end] >= target && nums[mid] <= target) {
                start = mid + 1;
            } else {
                // 그렇지 않으면 오른쪽 절반을 탐색
                end = mid - 1;
            }
        }
        // 새로운 중간 인덱스 계산
        mid = Math.floor((start + end) / 2);
    }
    // 탐색 실패 시 -1 반환
    return -1;
};
