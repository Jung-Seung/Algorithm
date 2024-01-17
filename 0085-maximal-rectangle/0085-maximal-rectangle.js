/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(aa) {
    let m = aa.length; // 행의 개수
    let n = aa[0].length; // 열의 개수

    // 각 셀에서 왼쪽으로의 넓이를 저장하는 배열
    let widthOnLeftTillHere = Array.from({ length: m }, () =>
        new Array(n).fill(0)
    );

    // 각 셀에서 왼쪽으로의 넓이 계산
    for (let r = 0; r < m; r++)
        for (let c = 0; c < n; c++)
            if (aa[r][c] === "1") {
                widthOnLeftTillHere[r][c] =
                    (widthOnLeftTillHere[r][c - 1] || 0) + 1;
            }

    let maxArea = 0; // 최대 직사각형의 넓이

    // 각 셀을 기준으로 최대 직사각형의 넓이 계산
    for (let r = 0; r < m; r++)
        for (let c = 0; c < n; c++)
            if (aa[r][c] === "1") {
                let minWidthGoingUp = Infinity;
                let increasingHeight = 1;

                // 현재 셀을 기준으로 위로 이동하면서 최대 직사각형의 넓이 계산
                for (let r2 = r; r2 >= 0; r2--, increasingHeight++) {
                    minWidthGoingUp = Math.min(
                        minWidthGoingUp,
                        widthOnLeftTillHere[r2][c]
                    );
                    maxArea = Math.max(
                        maxArea,
                        minWidthGoingUp * increasingHeight
                    );
                }
            }
    return maxArea; // 최대 직사각형의 넓이 반환
};