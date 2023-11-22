/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// 주어진 스도쿠 보드를 해결하는 함수
function solveSudoku(board) {
  const n = board.length;
  dfs(board, n);
}

// DFS(깊이 우선 탐색)를 사용하여 스도쿠 보드를 채우는 함수
function dfs(board, n) {
  // 모든 셀을 탐색
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      // 비어 있는 경우에만 진행
      if (board[row][col] !== '.') continue;
      // 1부터 9까지의 숫자를 시도
      for (let i = 1; i <= 9; i++) {
        const c = i.toString();
        // 현재 숫자가 유효한 경우
        if (isValid(board, row, col, n, c)) {
          board[row][col] = c;
          // 해당 보드로 계속해서 탐색 (해결했을 경우 true 반환)
          if (dfs(board, n)) return true;
        }
      }
      // 1부터 9까지의 숫자로는 해결되지 않았으므로 현재 셀을 다시 비움
      board[row][col] = '.';
      // 더 이상 진행할 수 없는 경우 false 반환 (해결책이 없음을 나타냄)
      return false;
    }
  }
  // 모든 셀이 채워졌으면 해결책을 찾은 것이므로 true 반환
  return true;
}

// 주어진 숫자가 스도쿠 규칙에 따라 유효한지 확인하는 함수
function isValid(board, row, col, n, c) {
  const blockRow = Math.floor(row / 3) * 3;
  const blockCol = Math.floor(col / 3) * 3;
  
  for (let i = 0; i < n; i++) {
    // 같은 행 또는 열에 중복된 숫자가 있는 경우 false 반환
    if (board[row][i] === c || board[i][col] === c) return false;
    // 현재 위치의 3x3 박스에 중복된 숫자가 있는 경우 false 반환
    const curRow = blockRow + Math.floor(i / 3);
    const curCol = blockCol + Math.floor(i % 3);
    if (board[curRow][curCol] === c) return false;
  }
  // 중복된 숫자가 없는 경우 true 반환
  return true;
}
