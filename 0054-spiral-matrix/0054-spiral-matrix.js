/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // 행렬의 행과 열의 길이를 구합니다.
    const m = matrix.length;
    const n = matrix[0].length;

    // 결과를 저장할 배열을 선언합니다.
    const result = [];

    // 행렬을 나선형으로 읽기 위한 시작과 끝 인덱스를 설정합니다.
    let startRow = 0;
    let endRow = m - 1;
    let startCol = 0;
    let endCol = n - 1;

    // 시작과 끝 인덱스가 교차할 때까지 반복합니다.
    while (startRow <= endRow && startCol <= endCol) {
        // 윗 행을 읽습니다.
        for (let i = startCol; i <= endCol; i++) {
            result.push(matrix[startRow][i]);
        }
        startRow++;

        // 오른쪽 열을 읽습니다.
        for (let i = startRow; i <= endRow; i++) {
            result.push(matrix[i][endCol]);
        }
        endCol--;

        // 아랫 행을 읽습니다.
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                result.push(matrix[endRow][i]);
            }
            endRow--;
        }

        // 왼쪽 열을 읽습니다.
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                result.push(matrix[i][startCol]);
            }
            startCol++;
        }
    }

    // 나선형으로 정렬된 행렬의 모든 요소를 반환합니다.
    return result;
};