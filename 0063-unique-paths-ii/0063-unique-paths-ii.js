/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // 장애물 그리드가 비어있거나 시작 지점에 장애물이 있는 경우 0을 반환합니다.
    if (!obstacleGrid || obstacleGrid[0][0] === 1) {
        return 0;
    }

    // 그리드의 행과 열의 수를 가져옵니다.
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;

    // 각 열에 대한 동적 계획법(DP) 배열을 생성합니다.
    const dp = new Array(cols).fill(0);

    // 시작 지점에 1가지 경로가 있음을 표시합니다.
    dp[0] = 1;

    // 그리드를 순회하며 동적 계획법(DP)을 적용합니다.
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // 현재 셀이 장애물인 경우 해당 열의 경로 수를 0으로 설정합니다.
            if (obstacleGrid[r][c] === 1) {
                dp[c] = 0;
            } else {
                // 현재 셀이 장애물이 아니면 왼쪽에서 오는 경로 수를 더합니다.
                if (c > 0) {
                    dp[c] += dp[c - 1];
                }
            }
        }
    }

    // 오른쪽 하단의 셀에서의 경로 수를 반환합니다.
    return dp[cols - 1];
};
