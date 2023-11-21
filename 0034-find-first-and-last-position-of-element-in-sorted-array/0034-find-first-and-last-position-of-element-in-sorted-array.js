/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 결과값 초기화
    let ans = [-1, -1];
    // 이진 검색을 위한 시작과 끝 인덱스 초기화
    let start = 0, end = nums.length - 1, mid;
    // 첫 번째 등장 인덱스 찾기
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (target == nums[mid]) {
            ans[0] = mid;
            end = mid - 1; // 왼쪽 절반을 탐색하도록 범위 조정
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    // 다시 시작과 끝 인덱스 초기화
    start = 0;
    end = nums.length - 1;
    // 마지막 등장 인덱스 찾기
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (target == nums[mid]) {
            ans[1] = mid;
            start = mid + 1; // 오른쪽 절반을 탐색하도록 범위 조정
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    // 결과 반환
    return ans;
};
