// 주어진 크기의 체스판에 N-Queens 문제의 해의 총 개수를 찾는 함수
var totalNQueens = function(N) {
    let ans = 0;

    // 재귀적으로 퀸을 배치하면서 가능한 모든 경우를 탐색하는 함수
    const place = (i, vert, ldiag, rdiag) => {
        // 모든 행에 대한 퀸의 배치가 완료되면 해의 개수를 증가시키고 종료
        if (i === N) ans++;
        else {
            // 현재 행의 각 열에 퀸을 배치하면서 가능한 경우를 탐색
            for (let j = 0; j < N; j++) {
                let vmask = 1 << j, lmask = 1 << (i + j), rmask = 1 << (N - i - 1 + j);
                // 세로, 왼쪽 대각선, 오른쪽 대각선에 다른 퀸이 없는지 확인
                if (vert & vmask || ldiag & lmask || rdiag & rmask) continue;
                // 다음 행으로 재귀 호출
                place(i + 1, vert | vmask, ldiag | lmask, rdiag | rmask);
            }
        }
    };
    // 첫 번째 행부터 시작하여 N-Queens 문제의 해의 총 개수를 찾음
    place(0, 0, 0, 0);
    return ans;
};
