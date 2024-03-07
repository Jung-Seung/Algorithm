/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length, n = p.length;
    // 2차원 배열 dp를 생성하여 초기화합니다.
    const dp = new Array(m+1).fill().map(() => new Array(n+1).fill(false));
    // 빈 패턴은 빈 문자열과 항상 일치합니다.
    dp[0][0] = true;
    // 첫 번째 행을 초기화합니다. (빈 문자열과 패턴의 비교)
    for (let j = 1; j <= n; j++) {
        if (p[j-1] === '*')
            dp[0][j] = dp[0][j-2]; // '*'의 앞 문자를 0번 반복한 경우
    }
    // 나머지 셀을 채워나갑니다.
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i-1] === p[j-1] || p[j-1] === '.') {
                dp[i][j] = dp[i-1][j-1];
            } else if (p[j-1] === '*') {
                dp[i][j] = dp[i][j-2]; // '*'을 이전 문자열을 한 번 더 반복한 경우
                if (s[i-1] === p[j-2] || p[j-2] === '.') {
                    dp[i][j] = dp[i][j] || dp[i-1][j]; // '*'을 이전 문자열을 포함한 경우
                }
            }
        }
    }
    return dp[m][n]; // 문자열 s와 패턴 p가 일치하는지 여부를 반환합니다.
}