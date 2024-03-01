/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length; // nums1의 길이
    let n2 = nums2.length; // nums2의 길이
    
    // nums1이 nums2보다 긴 경우, 두 배열을 교환하여 nums1이 항상 더 짧도록 함
    if (n1 > n2) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    let l = 0; // 이진 검색을 위한 왼쪽 경계
    let r = n1; // 이진 검색을 위한 오른쪽 경계
    
    while (l <= r) {
        // nums1에서의 중간 인덱스 계산
        let mid1 = Math.floor((l + r) / 2);
        // nums2에서의 중간 인덱스 계산
        let mid2 = Math.floor((n1 + n2 + 1) / 2 - mid1);
        
        // nums1과 nums2의 왼쪽 부분과 오른쪽 부분의 최대값과 최소값 계산
        let maxLeft1 = (mid1 === 0) ? Number.MIN_SAFE_INTEGER : nums1[mid1 - 1];
        let minRight1 = (mid1 === n1) ? Number.MAX_SAFE_INTEGER : nums1[mid1];
        
        let maxLeft2 = (mid2 === 0) ? Number.MIN_SAFE_INTEGER : nums2[mid2 - 1];
        let minRight2 = (mid2 === n2) ? Number.MAX_SAFE_INTEGER : nums2[mid2];
        
        // 중간값 조건을 만족하는 경우
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // 두 배열의 길이의 합이 짝수인 경우
            if ((n1 + n2) % 2 === 0) {
                // 중간값의 평균을 반환
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                // 중간값을 반환
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            // 이진 검색 범위를 왼쪽으로 이동
            r = mid1 - 1;
        } else {
            // 이진 검색 범위를 오른쪽으로 이동
            l = mid1 + 1;
        }
    }
    
    // 중간값을 찾지 못한 경우
    return -1;
};