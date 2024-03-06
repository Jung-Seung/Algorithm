/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const MinNum = -2147483648;  // 최소 정수 값
    const MaxNum = 2147483647;   // 최대 정수 값
    // 숫자가 정수 범위를 벗어나면 팰린드롬이 아님
    if(x < MinNum || x > MaxNum) {
        return false;
    }
    // 주어진 숫자를 문자열로 변환하여 뒤집은 후 원래 숫자와 비교하여 팰린드롬 여부 확인
    const reverse =  x.toString().split("").reverse().join("");
    return x === Number(reverse);
};