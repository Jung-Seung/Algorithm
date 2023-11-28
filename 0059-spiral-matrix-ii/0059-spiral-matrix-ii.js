/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // 행렬을 저장할 2차원 배열 초기화
    let save = Array.from(Array(n), () => new Array(n).fill(0));
    let count = 1;
    let left = 0;
    let right = n - 1;
    let bottom = n - 1;
    let top = 0;
    let dir = 0;

    // count가 n*n이 될 때까지 반복
    while (count <= n * n) {
        // 방향이 오른쪽일 때
        if (dir === 0) {
            for (let i = left; i <= right; i++) {
                save[top][i] = count;
                count++;
            }
            top++;
            dir++;
        }
        // 방향이 아래쪽일 때
        if (dir === 1) {
            for (let i = top; i <= bottom; i++) {
                save[i][right] = count;
                count++;
            }
            right--;
            dir++;
        }
        // 방향이 왼쪽일 때
        if (dir === 2) {
            for (let i = right; i >= left; i--) {
                save[bottom][i] = count;
                count++;
            }
            bottom--;
            dir++;
        }
        // 방향이 위쪽일 때
        if (dir === 3) {
            for (let i = bottom; i >= top; i--) {
                save[i][left] = count;
                count++;
            }
            left++;
            dir++;
        }
        // 방향 초기화
        dir = 0;
    }
    return save;
};
