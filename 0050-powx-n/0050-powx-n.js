/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// x의 n 승을 계산하는 함수
var myPow = function(x, n) {
  // 지수가 0인 경우 항상 1을 반환
  if (n === 0) {
    return 1;
  }
  // 지수가 음수인 경우, 밑을 역수로, 지수를 양수로 변경
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  // 지수가 짝수인 경우, 절반의 지수로 계산하여 제곱
  if (n % 2 === 0) {
    let halfPower = myPow(x, n / 2);
    return halfPower * halfPower;
  }
  // 지수가 홀수인 경우, 지수를 1 감소시켜 재귀적으로 계산
  else {
    return x * myPow(x, n - 1);
  }  
};
