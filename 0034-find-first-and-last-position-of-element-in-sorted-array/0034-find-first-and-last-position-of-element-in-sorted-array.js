/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 시작 위치를 찾는 이진 검색 함수
    function findStart(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let start = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                start = mid;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return start;
    }

    // 끝 위치를 찾는 이진 검색 함수
    function findEnd(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let end = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                end = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return end;
    }

    const start = findStart(nums, target);
    
    // 시작 위치를 찾지 못한 경우
    if (start === -1) {
        return [-1, -1];
    }
    
    const end = findEnd(nums, target);
    return [start, end];
};