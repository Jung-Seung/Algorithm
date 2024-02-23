/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    // s1, s2, s3의 길이 계산
    const m = s1.length, n = s2.length, l = s3.length;
    // s1과 s2의 길이의 합이 s3의 길이와 다르면 교차할 수 없음
    if (m + n !== l) return false;
    
    // dp 배열 초기화
    const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));
    
    // 첫 번째 행과 첫 번째 열 초기화
    dp[0][0] = true;
    for (let i = 1; i <= m; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
    }
    for (let j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
    }
    
    // dp 배열 채우기
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || 
                       (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
        }
    }
    
    // dp[m][n] 값 반환
    return dp[m][n];
};