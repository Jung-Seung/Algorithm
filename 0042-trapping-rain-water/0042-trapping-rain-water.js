/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 배열의 길이
    let n = height.length;
    // 양 끝에서 시작하는 포인터 및 각 포인터의 최대 높이 초기화
    let left = 0, right = n - 1, left_max = 0, right_max = 0, water = 0;
    // 양 끝 포인터가 만날 때까지 반복
    while (left <= right) {
        // 왼쪽 포인터의 높이가 오른쪽 포인터의 높이 이하일 경우
        if (height[left] <= height[right]) {
            // 현재 높이가 현재까지의 최대 높이보다 크면 최대 높이 갱신
            if (height[left] > left_max) left_max = height[left];
            // 현재 높이가 최대 높이보다 작으면 물을 채움
            else water += left_max - height[left];
            left++; // 왼쪽 포인터 이동
        } else { // 오른쪽 포인터의 높이가 왼쪽 포인터의 높이보다 작을 경우
            // 현재 높이가 현재까지의 최대 높이보다 크면 최대 높이 갱신
            if (height[right] > right_max) right_max = height[right];
            // 현재 높이가 최대 높이보다 작으면 물을 채움
            else water += right_max - height[right];
            right--; // 오른쪽 포인터 이동
        }
    }
    // 물이 채워진 양 반환
    return water;
};
