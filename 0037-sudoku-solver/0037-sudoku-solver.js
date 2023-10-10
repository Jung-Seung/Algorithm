/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solve(board);
};

var solve = function(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === ".") {
                for (let num = 1; num <= 9; num++) {
                    const numStr = num.toString();
                    if (isValidMove(board, row, col, numStr)) {
                        board[row][col] = numStr;
                        if (solve(board)) {
                            return true;
                        }
                        board[row][col] = ".";
                    }
                }
                return false;
            }
        }
    }
    return true; // 스도쿠 퍼즐 완성
};

var isValidMove = function(board, row, col, num){
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num || board[row][i] === num) {
            return false; // 같은 열 또는 같은 행에 중복된 숫자가 있음
        }
    }
    
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num) {
                return false; // 같은 3x3 서브 그리드에 중복된 숫자가 있음
            }
        }
    }
    
    return true;
};