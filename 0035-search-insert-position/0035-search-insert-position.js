/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // target을 찾은 경우 해당 인덱스 반환
        } else if (nums[mid] < target) {
            left = mid + 1; // 중간 값보다 큰 경우 오른쪽 부분 탐색
        } else {
            right = mid - 1; // 중간 값보다 작은 경우 왼쪽 부분 탐색
        }
    }

    // while 루프를 빠져나왔을 때 left가 삽입 위치가 됨
    return left;
};