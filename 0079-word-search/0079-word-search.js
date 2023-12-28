/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  // 보드의 세로 길이
  const h = board.length;
  // 보드의 가로 길이
  const w = board[0].length;
  // 상, 우, 하, 좌 방향으로 이동하기 위한 배열
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  // DFS (깊이 우선 탐색) 함수
  const go = (x, y, k) => {
    // 현재 좌표의 값이 단어의 현재 인덱스와 일치하지 않으면 false 반환
    if (board[x][y] !== word[k]) return false;
    // 단어의 모든 문자를 찾았을 경우 true 반환
    if (k === word.length - 1) return true;

    // 현재 좌표를 '*'로 표시하여 방문했음을 표시
    board[x][y] = '*';
    
    // 상, 우, 하, 좌로 이동하여 다음 좌표에서 다시 검색
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      if (i >= 0 && i < h && j >= 0 && j < w) {
        if (go(i, j, k + 1)) return true;
      }
    }
    
    // 현재 좌표를 원래 값으로 복원
    board[x][y] = word[k];
    
    // false 반환 (해당 경로에서 단어를 찾지 못한 경우)
    return false;
  };

  // 보드의 모든 좌표에서 DFS 탐색 시작
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (go(i, j, 0)) return true;
    }
  }

  // 모든 좌표에서 단어를 찾지 못한 경우 false 반환
  return false;
};