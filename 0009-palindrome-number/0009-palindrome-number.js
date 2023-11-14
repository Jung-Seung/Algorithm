/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 음수 또는 10의 배수인 경우 회문이 아님
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }

    var half = 0;  // 숫자의 뒷부분을 저장할 변수 초기화

    // 주어진 숫자를 반으로 나누어 뒤집은 뒷부분 생성
    while (x > half) {
        half = half * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // 홀수 자릿수를 가진 경우 중앙값은 무시하여 비교
    return x === half || x === Math.floor(half / 10);
};
