/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 결과를 저장할 변수 초기화
    let rev = 0;
    // 입력 정수의 부호 저장
    const sign = x < 0 ? -1 : 1;
    // 입력 정수의 절댓값으로 계산 진행
    x = Math.abs(x);

    // 입력 정수가 0이 될 때까지 반복
    while (x !== 0) {
        // 일의 자리 숫자 추출
        const digit = x % 10;
        // 결과에 10을 곱하고 추출한 숫자를 더함
        rev = rev * 10 + digit;
        // 입력 정수를 10으로 나누어 일의 자리 숫자를 제거
        x = Math.floor(x / 10);
    }

    // 최종 결과에 부호를 적용
    const result = sign * rev;

    // 결과가 32비트 정수의 범위를 벗어나면 0 반환
    if (result > 2 ** 31 - 1 || result < -(2 ** 31)) {
        return 0;
    }

    // 최종적으로 뒤집힌 정수 반환
    return result;
};
