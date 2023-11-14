/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length, n = p.length;
    
    // DP 테이블 초기화
    const dp = new Array(m+1).fill().map(() => new Array(n+1).fill(false));
    dp[0][0] = true; // 빈 패턴은 빈 문자열과 일치

    // 첫 번째 행 초기화 (빈 문자열)
    for (let j = 1; j <= n; j++) {
        if (p[j-1] === '*') {
            dp[0][j] = dp[0][j-2];
        }
    }

    // 나머지 셀 채우기
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i-1] === p[j-1] || p[j-1] === '.') {
                dp[i][j] = dp[i-1][j-1];
            } else if (p[j-1] === '*') {
                dp[i][j] = dp[i][j-2]; // 0 회 이상의 발생
                if (s[i-1] === p[j-2] || p[j-2] === '.') {
                    dp[i][j] = dp[i][j] || dp[i-1][j]; // 1 회 이상의 발생
                }
            }
        }
    }

    return dp[m][n];
};
