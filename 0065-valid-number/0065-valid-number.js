/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(S) {
    // 지수 표기 여부, 부호 여부, 숫자 여부, 소수점 여부를 나타내는 변수들을 초기화합니다.
    let exp = false, sign = false, num = false, dec = false;

    // 문자열의 각 문자에 대해 검사합니다.
    for (let c of S) {
        if (c >= '0' && c <= '9') {
            // 숫자인 경우 num을 true로 설정합니다.
            num = true;
        } else if (c === 'e' || c === 'E') {
            // 지수 표기인 경우
            // 이미 exp가 true이거나 num이 false인 경우 유효하지 않습니다.
            if (exp || !num) return false;
            else {
                exp = true;
                sign = false;
                num = false;
                dec = false;
            }
        } else if (c === '+' || c === '-') {
            // 부호인 경우
            // 이미 sign, num, dec 중 하나라도 설정된 경우 유효하지 않습니다.
            if (sign || num || dec) return false;
            else sign = true;
        } else if (c === '.') {
            // 소수점인 경우
            // 이미 dec 또는 exp 중 하나라도 설정된 경우 유효하지 않습니다.
            if (dec || exp) return false;
            else dec = true;
        } else {
            // 숫자, 지수 표기, 부호, 소수점 이외의 문자가 포함된 경우 유효하지 않습니다.
            return false;
        }
    }

    // 최종적으로 숫자가 있어야 유효한 숫자로 판단합니다.
    return num;
};
