/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    // 만약 nums1이 nums2보다 길다면 두 배열을 교환하여 nums1이 더 짧도록 만듭니다.
    if (n1 > n2) {
        return findMedianSortedArrays(nums2, nums1);
    }
    let l = 0;
    let r = n1;
    // 이진 검색을 수행합니다.
    while (l <= r) {
        let mid1 = Math.floor((l + r) / 2);
        let mid2 = Math.floor((n1 + n2 + 1) / 2 - mid1);
        // 각 배열의 왼쪽과 오른쪽의 요소들을 찾습니다.
        let maxLeft1 = (mid1 == 0) ? Number.MIN_SAFE_INTEGER : nums1[mid1 - 1];
        let minRight1 = (mid1 == n1) ? Number.MAX_SAFE_INTEGER : nums1[mid1];

        let maxLeft2 = (mid2 == 0) ? Number.MIN_SAFE_INTEGER : nums2[mid2 - 1];
        let minRight2 = (mid2 == n2) ? Number.MAX_SAFE_INTEGER : nums2[mid2];
        // 조건을 확인하여 중앙값을 찾습니다.
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((n1 + n2) % 2 == 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            r = mid1 - 1;
        } else {
            l = mid1 + 1;
        }
    }
    // 중앙값을 찾지 못한 경우 -1을 반환합니다.
    return -1;
};
