/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length; // 그리드의 행 길이
    const n = obstacleGrid[0].length; // 그리드의 열 길이

    if (obstacleGrid[0][0] === 1) {
        return 0; // 시작 지점에 장애물이 있으면 0을 반환
    }

    // dp 배열 초기화
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    dp[0][0] = 1; // 시작 위치의 경우 1로 설정

    // 첫 번째 열 초기화
    for (let i = 1; i < m; i++) {
        if (obstacleGrid[i][0] === 0) {
            dp[i][0] = dp[i - 1][0]; // 장애물이 없는 경우 이전 값과 같음
        }
    }

    // 첫 번째 행 초기화
    for (let j = 1; j < n; j++) {
        if (obstacleGrid[0][j] === 0) {
            dp[0][j] = dp[0][j - 1]; // 장애물이 없는 경우 이전 값과 같음
        }
    }

    // 그리드의 나머지 부분을 채움
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; // 이전 값들의 합을 계산
            }
        }
    }

    return dp[m - 1][n - 1]; // 오른쪽 아래 모서리의 값 반환
};