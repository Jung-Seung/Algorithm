/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length; // 배열의 길이
    let left = 0, right = n - 1; // 왼쪽 포인터와 오른쪽 포인터 초기화
    let max_area = 0; // 최대 면적 초기화
    
    // 왼쪽 포인터가 오른쪽 포인터보다 작은 동안 반복
    while (left < right) {
        // 현재 두 포인터 사이에 얻을 수 있는 면적 계산
        let area = Math.min(height[left], height[right]) * (right - left);
        
        // 최대 면적 갱신
        max_area = Math.max(max_area, area);
        
        // 높이가 더 낮은 쪽의 포인터를 이동시킴
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return max_area; // 최대 면적 반환
};