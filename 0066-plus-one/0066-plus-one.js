/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
    const n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        // 각 자릿수에 1을 더함
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        // 자릿수가 9인 경우 0으로 바꾸고 반복문을 계속 진행함
        digits[i] = 0;
    }
    // 모든 자릿수가 9인 경우 배열 맨 앞에 1을 추가해줌
    return [1, ...digits];
}