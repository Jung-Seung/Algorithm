/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 초기값으로 m x n의 2차원 배열 생성
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    // 첫 번째 행과 첫 번째 열의 값은 모두 1로 초기화
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    // 나머지 셀에 대한 경로 수 계산
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};