/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/*
    1. 만약 n이 0이라면 1을 반환합니다.
    2. 만약 n이 음수라면 x의 -n 거듭 제곱의 역수를 반환합니다.
    3. n이 짝수인 경우, x를 n/2 거듭 제곱한 값을 구한 후 이를 제곱하여 반환합니다.
    4. n이 홀수인 경우, x를 Math.floor(n/2) 거듭 제곱한 값을 구한 후 이를 제곱하여 x와 곱한 값을 반환합니다.
*/
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / myPow(x, -n);
    if (n % 2 === 0) {
        let half = myPow(x, n / 2);
        return half * half;
    } else {
        let half = myPow(x, Math.floor(n / 2));
        return half * half * x;
    }
};
