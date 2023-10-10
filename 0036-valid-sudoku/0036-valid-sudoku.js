/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 행 검사
    for (let row = 0; row < 9; row++) {
        const rowSet = new Set();
        for (let col = 0; col < 9; col++) {
            const cell = board[row][col];
            if (cell !== '.' && rowSet.has(cell)) {
                return false;
            }
            if (cell !== '.') {
                rowSet.add(cell);
            }
        }
    }

    // 열 검사
    for (let col = 0; col < 9; col++) {
        const colSet = new Set();
        for (let row = 0; row < 9; row++) {
            const cell = board[row][col];
            if (cell !== '.' && colSet.has(cell)) {
                return false;
            }
            if (cell !== '.') {
                colSet.add(cell);
            }
        }
    }

    // 3x3 서브 그리드 검사
    for (let block = 0; block < 9; block++) {
        const blockSet = new Set();
        const startRow = Math.floor(block / 3) * 3;
        const startCol = (block % 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const cell = board[startRow + i][startCol + j];
                if (cell !== '.' && blockSet.has(cell)) {
                    return false;
                }
                if (cell !== '.') {
                    blockSet.add(cell);
                }
            }
        }
    }

    return true;
};