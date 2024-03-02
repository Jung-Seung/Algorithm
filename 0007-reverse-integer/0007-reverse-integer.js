/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let rev = 0; // 역순으로 만들어질 정수
  const sign = x < 0 ? -1 : 1; // 입력된 정수의 부호 저장
  x = Math.abs(x); // 입력된 정수의 절대값을 사용
  // 입력된 정수가 0이 아닐 때까지 반복
  while (x !== 0) {
    const digit = x % 10; // 현재 자릿수 추출
    rev = rev * 10 + digit; // 역순으로 만들어진 정수에 현재 자릿수 추가
    x = Math.floor(x / 10); // 다음 자릿수로 이동
  }
  const result = sign * rev; // 부호를 곱해 최종 결과 생성
  // 결과가 32비트 정수 범위를 벗어나면 0을 반환
  if (result > 2 ** 31 - 1 || result < -(2 ** 31)) return 0;
  return result; // 결과 반환
}