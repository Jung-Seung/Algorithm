/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length;
    let left = 0, right = n - 1;
    let max_area = 0;

    // left와 right 포인터가 만날 때까지 반복
    while (left < right) {
        // 현재 두 선으로 만들어지는 직사각형의 넓이 계산
        let area = Math.min(height[left], height[right]) * (right - left);
        // 최대 넓이 갱신
        max_area = Math.max(max_area, area);

        // 높이가 더 낮은 쪽을 내쪽으로 이동
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max_area;
};
