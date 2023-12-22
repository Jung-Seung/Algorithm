/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // 행과 열의 개수를 가져옵니다.
    const row = matrix.length;
    const col = matrix[0].length;
    // 행과 열에 0이 있는지 여부를 기록할 배열을 생성합니다.
    const dummyRow = new Array(row).fill(-1);
    const dummyCol = new Array(col).fill(-1);
    // 0이 있는 위치를 dummyRow와 dummyCol 배열에 표시합니다.
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 0) {
                dummyRow[i] = 0;
                dummyCol[j] = 0;
            }
        }
    }
    // dummyRow와 dummyCol 배열을 기반으로 행렬을 수정합니다.
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (dummyRow[i] === 0 || dummyCol[j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
};