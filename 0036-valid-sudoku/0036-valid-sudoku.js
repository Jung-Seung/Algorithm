/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 보드를 순회하면서 행, 열, 3x3 박스에 중복된 숫자가 있는지 확인
    for (let i = 0; i < board.length; i++) {
        // 각 행, 열, 박스를 확인하기 위한 맵 초기화
        let rowMap = {};
        let colMap = {};
        let boxMap = {};

        for (let j = 0; j < board[i].length; j++) {
            // 현재 위치의 3x3 박스 값 가져오기
            let box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

            // 현재 값이 '.'이 아닌 경우에만 중복 확인
            if (board[i][j] !== '.') {
                // 현재 행에 중복된 숫자가 있는 경우 false 반환
                if (rowMap[board[i][j]]) return false;
                rowMap[board[i][j]] = 1;
                // 현재 열에 중복된 숫자가 있는 경우 false 반환
                if (colMap[board[j][i]]) return false;
                colMap[board[j][i]] = 1;
                // 현재 박스에 중복된 숫자가 있는 경우 false 반환
                if (box !== '.') {
                    if (boxMap[box]) return false;
                    boxMap[box] = 1;
                }
            }
        }
    }
    // 모든 확인을 통과하면 true 반환
    return true;
};
