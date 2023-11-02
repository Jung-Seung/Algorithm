/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1; // 만약 n이 1이라면 1을 반환
    let dp = new Array(n + 1).fill(0); // 길이가 n+1이고 0으로 채워진 배열 dp 생성
    dp[1] = 1; // 첫 번째 요소를 1로 설정
    dp[2] = 2; // 두 번째 요소를 2로 설정
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // dp의 각 요소를 이전 두 요소의 합으로 설정
    }
    return dp[n]; // 마지막 요소 반환
};
