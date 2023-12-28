/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // 주어진 좌표 (i, j) 주변을 상, 하, 좌, 우로 이동하기 위한 방향
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    // 주어진 좌표가 유효한지 확인하는 함수
    const isValid = (i, j) => i >= 0 && i < board.length && j >= 0 && j < board[0].length;
    
    // DFS (깊이 우선 탐색)을 통해 단어를 찾는 함수
    const search = (i, j, index) => {
        // 현재 좌표의 문자가 단어의 현재 인덱스와 일치하는지 확인
        if (board[i][j] !== word[index]) {
            return false;
        }

        // 단어의 모든 문자를 찾았을 경우
        if (index === word.length - 1) {
            return true;
        }

        // 현재 좌표 방문 표시
        const originalChar = board[i][j];
        board[i][j] = '#';

        // 상, 하, 좌, 우로 이동하여 다음 좌표에서 다시 검색
        for (const [dx, dy] of directions) {
            const ni = i + dx;
            const nj = j + dy;
            if (isValid(ni, nj) && search(ni, nj, index + 1)) {
                return true;
            }
        }

        // 현재 좌표 방문 표시 해제
        board[i][j] = originalChar;

        return false;
    };

    // 보드의 모든 좌표에서 탐색 시작
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (search(i, j, 0)) {
                return true;
            }
        }
    }

    // 단어를 찾지 못한 경우
    return false;
};