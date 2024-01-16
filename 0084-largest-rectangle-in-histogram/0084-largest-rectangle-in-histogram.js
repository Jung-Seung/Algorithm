/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const n = heights.length;
    
    // 각 막대의 오른쪽에 위치한 더 작은 막대의 인덱스를 저장하는 배열
    const nsr = new Array(n).fill(0);
    // 각 막대의 왼쪽에 위치한 더 작은 막대의 인덱스를 저장하는 배열
    const nsl = new Array(n).fill(0);

    const stack = [];
        
    // 각 막대의 오른쪽에 위치한 더 작은 막대의 인덱스 계산
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length !== 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            // 현재 막대보다 작거나 같은 높이를 가진 막대들의 인덱스를 스택에서 제거
            stack.pop();
        }
        // 스택이 비어있으면 현재 막대의 오른쪽에는 더 작은 막대가 없음
        if (stack.length === 0) {
            nsr[i] = n;
        } else {
            nsr[i] = stack[stack.length - 1];
        }
        // 현재 막대의 인덱스를 스택에 추가
        stack.push(i);
    }

    // 스택 초기화
    while (stack.length !== 0) {
        stack.pop();
    }

    // 각 막대의 왼쪽에 위치한 더 작은 막대의 인덱스 계산
    for (let i = 0; i < n; i++) {
        while (stack.length !== 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            // 현재 막대보다 작거나 같은 높이를 가진 막대들의 인덱스를 스택에서 제거
            stack.pop();
        }
        // 스택이 비어있으면 현재 막대의 왼쪽에는 더 작은 막대가 없음
        if (stack.length === 0) {
            nsl[i] = -1;
        } else {
            nsl[i] = stack[stack.length - 1];
        }
        // 현재 막대의 인덱스를 스택에 추가
        stack.push(i);
    }

    let ans = 0;

    // 각 막대에서 계산된 직사각형의 넓이 중 가장 큰 값 찾기
    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, heights[i] * (nsr[i] - nsl[i] - 1));
    }
   
    return ans;
};