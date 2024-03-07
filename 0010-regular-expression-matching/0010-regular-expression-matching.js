/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const rows = s.length;  // 문자열 s의 길이
    const columns = p.length;  // 패턴 p의 길이
    // 예외 처리: 문자열과 패턴이 모두 비어있을 때는 일치함
    if (rows == 0 && columns == 0) {
        return true;
    }
    // 예외 처리: 패턴이 비어있는 경우는 일치하지 않음
    if (columns == 0) {
        return false;
    }
    // 동적 계획법을 위한 2차원 배열 dp 초기화
    const dp = Array.from({ length: s.length + 1 }, () => [false]);
    dp[0][0] = true;  // dp[0][0]은 빈 문자열과 빈 패턴이므로 항상 true
    // 패턴의 첫 번째 문자가 '*'인 경우 처리
    for (let i = 1; i < columns + 1; i++) {
        if (p[i - 1] === '*') {
            dp[0][i] = dp[0][i - 2];  // '*'의 앞 문자를 0번 반복한 경우
        } else {
            dp[0][i] = false;
        }
    }
    // 문자열과 패턴을 비교하면서 동적 계획법을 적용하여 일치 여부 판단
    for (let i = 1; i < rows + 1; i++) {
        for (let j = 1; j < columns + 1; j++) {
            if (p[j - 1] === '*') {  // '*'을 만난 경우
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    // '*' 앞의 문자와 현재 문자가 일치하거나 '.'인 경우
                    // '*'을 이전 문자열을 한 번 더 반복하거나 이전 문자열을 포함한 경우 중 최소 한 가지만 만족하면 됨
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                } else {
                    // '*' 앞의 문자와 현재 문자가 일치하지 않는 경우
                    // '*'을 이전 문자열을 한 번 더 반복한 경우만 고려하면 됨
                    dp[i][j] = dp[i][j - 2];
                }
            } else if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                // 현재 문자가 일치하는 경우 또는 패턴이 '.'인 경우
                // 이전 문자열까지의 일치 여부에 따라 결정됨
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // 현재 문자가 일치하지 않는 경우
                dp[i][j] = false;
            }
        }
    }
    return dp[rows][columns];  // 문자열 s와 패턴 p가 일치하는지 여부 반환
};