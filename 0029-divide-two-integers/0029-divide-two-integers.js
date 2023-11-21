/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // 결과가 음수인지 여부 확인
    const retIsNegative = Math.sign(divisor) !== Math.sign(dividend);
    // 나눠지는 수와 나누는 수를 절댓값으로 변경
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let ret = 0; // 나눈 결과를 저장할 변수
    // 나누기 연산 수행
    while (divisor <= dividend) {
        let value = divisor; // 현재 divisor의 값
        let multiple = 1;    // 현재 divisor를 몇 번 더할지를 나타내는 변수
        // divisor를 반복해서 더하며 나눠지는 수를 초과하지 않도록 함
        while (value + value <= dividend) {
            value += value;
            multiple += multiple;
        }
        // 나눠지는 수에서 현재 divisor의 값을 뺌
        dividend = dividend - value;
        // 결과에 현재 divisor를 몇 번 더한지를 더함
        ret += multiple;
    }
    // 결과가 32비트 정수 범위를 초과하는지 확인하고 처리
    if (ret > ((2**31) - 1)) {
        return retIsNegative ? -(2**31) : 2**31 - 1;
    }
    return retIsNegative ? -ret : ret; // 결과에 부호를 적용하여 반환
};
