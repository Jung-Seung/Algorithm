/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // 최대 넓이와 인덱스를 추적하는 스택을 초기화합니다.
    let maxArea = 0;
    const stack = [];

    // 높이를 반복하며 스택을 사용하여 가장 큰 직사각형의 넓이를 계산합니다. (추가적인 정리를 위해 추가 반복 포함)
    for (let i = 0; i <= heights.length; i++) {
        // 스택이 비어있지 않고 현재 막대가 스택의 맨 위 막대보다 작을 때
        while (stack.length > 0 && (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
            // 스택에서 인덱스를 팝하고 팝된 높이로 넓이를 계산합니다.
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        // 현재 인덱스를 스택에 푸시합니다.
        stack.push(i);
    }

    // 최대 넓이를 반환합니다.
    return maxArea;
};