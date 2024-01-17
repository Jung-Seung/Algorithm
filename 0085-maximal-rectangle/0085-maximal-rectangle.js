/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalRectangle(aa) {
    let m = aa.length; // 행의 개수
    let n = aa[0].length; // 열의 개수

    let heights = new Array(n + 1).fill(0); // 현재 행의 높이 정보를 저장하는 배열 (마지막 열은 0으로 초기화)
    let maxArea = 0; // 최대 직사각형의 넓이

    for (let r = 0; r < m; r++) {
        let cols = []; // 이전에 증가했던 열들을 저장하는 스택
        cols.top = () => cols[cols.length - 1]; // 스택의 맨 위에 있는 열을 가져오는 함수

        for (let c = 0; c <= n; c++) {
            if (c < n) {
                if (aa[r][c] === "1") heights[c]++; // 현재 행에서 높이 정보 업데이트
                else heights[c] = 0;
            }

            while (cols.length && heights[cols.top()] > heights[c]) {
                let height = heights[cols.pop()]; // 이전 열의 높이
                let width = cols.length ? c - cols.top() - 1 : c; // 이전 이전 열부터 현재 열까지의 너비
                maxArea = Math.max(maxArea, width * height); // 최대 직사각형의 넓이 갱신
            }
            cols.push(c);
        }
    }
    return maxArea; // 최대 직사각형의 넓이 반환
}