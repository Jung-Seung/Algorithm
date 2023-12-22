 /*
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // 최소 편집 거리를 저장할 2차원 배열 dp를 생성합니다.
    let dp = Array(word1.length + 1).fill(null).map(() => Array(word2.length + 1).fill(0));
    // dp 배열의 첫 번째 행과 열을 빈 문자열로부터의 거리로 초기화합니다.
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = i;
    }
    for (let i = 0; i < dp[0].length; i++) {
        dp[0][i] = i;
    }
    // 동적 계획법을 사용하여 dp 배열을 채웁니다.
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            // 세 가지 작업의 최솟값을 계산합니다: 삽입, 삭제, 또는 교체
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,      // 삽입 작업 (왼쪽)
                dp[i][j - 1] + 1,      // 삭제 작업 (위쪽)
                dp[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1] ? 1 : 0)  // 교체 작업 (대각선)
            );
        }
    }
    // 최소 편집 거리는 dp 배열의 오른쪽 하단 셀에 저장됩니다.
    return dp[dp.length - 1][dp[0].length - 1];
};