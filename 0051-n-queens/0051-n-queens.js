/**
 * @param {number} n
 * @return {string[][]}
 */

// 주어진 크기의 체스판에 N-Queens 문제의 해를 찾는 함수
var solveNQueens = function(n) {
    // 체스판을 나타내는 이차원 배열 초기화
    var mat = [...new Array(n)].map(ele => new Array(n).fill("."));
    var len = mat.length;
    var result = [];
    
    // 첫 번째 행부터 시작하여 N-Queens 문제의 해 찾기
    helper(0, mat);
    
    return result;

    // 재귀적으로 퀸을 배치하면서 가능한 모든 경우를 탐색하는 함수
    function helper(row, mat) {
        // 모든 행에 대한 퀸의 배치가 완료되면 결과에 추가하고 종료
        if (row == n) {
            result.push([...mat].map(ele => ele.join("")));
            return;
        }

        // 현재 행의 각 열에 퀸을 배치하면서 가능한 경우를 탐색
        for (let j = 0; j < len; j++) {
            // 대각선 상에 다른 퀸이 없는지 확인하고 배치 가능하면 퀸을 배치하고 재귀 호출
            if (checkDiagonal(row, j, mat, n)) {
                mat[row][j] = 'Q';
                helper(row + 1, mat);
                // 백트래킹: 다른 경우를 탐색하기 위해 현재 퀸을 제거
                mat[row][j] = '.';
            }
        }
    }

    // 대각선 상에 다른 퀸이 있는지 확인하는 함수
    function checkDiagonal(i, j, mat, len) {
        var x = i - 1;
        var y = j - 1;

        // 왼쪽 위 대각선 확인
        while (x >= 0 && x < len && y >= 0 && y < len) {
            if (mat[x][y] == 'Q') return false;
            x = x - 1;
            y = y - 1;
        }

        x = i - 1;
        y = j + 1;

        // 오른쪽 위 대각선 확인
        while (x >= 0 && x < len && y >= 0 && y < len) {
            if (mat[x][y] == 'Q') return false;
            x = x - 1;
            y = y + 1;
        }

        x = i - 1;
        y = j;

        // 위쪽 확인
        while (x >= 0 && x < len && y >= 0 && y < len) {
            if (mat[x][y] == 'Q') return false;
            x--;
        }

        return true;
    }
};
