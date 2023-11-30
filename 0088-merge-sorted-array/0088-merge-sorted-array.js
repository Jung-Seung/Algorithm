/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // nums1의 모든 요소를 확인
    for (let i = 0; i < nums1.length; i++) {
        // m 이후의 위치에 있는 경우, nums2의 요소를 추가
        if (i >= m) {
            nums1[i] = nums2[i - m];
        }
    }
    // nums1을 정렬하고 반환
    return nums1.sort((a, b) => a - b);
};
