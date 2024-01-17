/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    // 각 열에 대한 높이 배열 초기화
    const heights = new Array(cols).fill(0);

    let maxArea = 0;

    // 각 행에 대해 높이 배열을 업데이트하면서 최대 직사각형의 넓이 찾기
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // 현재 행에서 이전 행까지의 1로 이루어진 세로 길이 계산
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }

        // 현재 행에서 구한 높이 배열을 사용하여 최대 직사각형의 넓이 계산
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};

var largestRectangleArea = function(heights) {
    const n = heights.length; // 높이 배열의 길이
    const stack = []; // 인덱스를 저장하는 스택
    let maxArea = 0; // 최대 직사각형의 넓이

    for (let i = 0; i <= n; i++) {
        while (stack.length > 0 && (i === n || heights[i] < heights[stack[stack.length - 1]])) {
            // 스택이 비어있지 않고 현재 높이가 스택의 맨 위 높이보다 작을 때
            const height = heights[stack.pop()]; // 스택에서 높이를 꺼냄
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1; // 폭 계산
            maxArea = Math.max(maxArea, height * width); // 최대 넓이 갱신
        }
        stack.push(i); // 현재 인덱스를 스택에 추가
    }

    return maxArea; // 최대 직사각형의 넓이 반환
};