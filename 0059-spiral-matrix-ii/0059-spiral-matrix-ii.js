/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // 행렬 초기화
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    let num = 1;

    // 반시계방향으로 나선형 순서로 행렬 채우기
    while (top <= bottom && left <= right) {
        // 위쪽 행
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num;
            num++;
        }
        top++;

        // 오른쪽 열
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num;
            num++;
        }
        right--;

        // 아래쪽 행
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num;
                num++;
            }
            bottom--;
        }

        // 왼쪽 열
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num;
                num++;
            }
            left++;
        }
    }
    return matrix;
};