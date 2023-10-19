/**
 * @param {number} n
 * @return {string[][]}
 */
/*
    1. solveNQueens 함수는 N-Queens 문제를 해결하는 함수입니다. n은 보드 크기입니다.
    2. results 배열은 모든 가능한 해결책을 저장할 곳입니다.
    3. board 배열은 현재의 보드 상태를 저장합니다. 처음에는 모든 위치가 비어 있습니다.
    4. isSafe 함수는 주어진 행과 열에 퀸을 배치할 수 있는지를 확인합니다. 다른 퀸과 겹치지 않도록 검사합니다.
    5. solve 함수는 백트래킹을 수행합니다. 각 행에 대해 가능한 열에 퀸을 배치하고, 이를 재귀적으로 반복합니다.
    6. solve 함수를 호출하여 가능한 모든 배치를 시도하고, 유효한 경우 결과에 추가합니다.
*/
var solveNQueens = function(n) {
    const results = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    const isSafe = (row, col) => {
        // 현재 행 위의 열을 확인합니다.
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        // 왼쪽 위 대각선을 확인합니다.
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        // 오른쪽 위 대각선을 확인합니다.
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        return true;
    };
    const solve = (row) => {
        if (row === n) {
            // 모든 행이 채워졌다면 현재 보드를 결과에 추가합니다.
            results.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q'; // 퀸을 배치합니다.
                solve(row + 1); // 다음 행으로 넘어갑니다.
                board[row][col] = '.'; // 백트래킹합니다.
            }
        }
    };
    solve(0); // 첫 번째 행부터 시작합니다.
    return results;
};