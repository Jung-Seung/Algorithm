/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // 빈 문자열이나 첫 글자가 0인 경우 해독 불가능
    if (s.length === 0 || s[0] === '0') {
        return 0;
    }

    const n = s.length;
    let dp = new Array(n + 1).fill(0);

    // 초기값 설정
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        // 현재 숫자가 0이 아닌 경우, 이전 해독 방법의 수를 그대로 가져옴
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }

        // 현재 숫자와 이전 숫자를 합쳐서 해독 가능한 경우
        const twoDigit = parseInt(s.substring(i - 2, i));
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
};