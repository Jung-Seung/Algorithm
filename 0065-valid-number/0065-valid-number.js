/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    // 문자열 양 끝의 공백 제거
    s = s.trim();

    // 숫자, 소수점, 지수 기호 등을 추적하기 위한 변수들 초기화
    let seenNumber = false;      // 숫자를 보았는지 여부
    let seenDot = false;         // 소수점을 보았는지 여부
    let seenE = false;           // 지수(E 또는 e)를 보았는지 여부
    let seenNumberAfterE = true; // 지수 이후 숫자를 본 상태인지 여부

    for (let i = 0; i < s.length; i++) {
        if ("0123456789".includes(s[i])) {
            // 현재 문자가 숫자인 경우
            seenNumber = true;
            seenNumberAfterE = true;
        } else if (s[i] === ".") {
            // 현재 문자가 소수점인 경우
            if (seenDot || seenE) {
                // 이미 소수점이나 지수를 본 경우, 유효하지 않음
                return false;
            }
            seenDot = true;
        } else if (s[i] === "e" || s[i] === "E") {
            // 현재 문자가 지수 기호인 경우
            if (seenE || !seenNumber) {
                // 이미 지수를 본 경우 또는 숫자를 아직 보지 않은 경우, 유효하지 않음
                return false;
            }
            seenE = true;
            seenNumberAfterE = false;
        } else if (s[i] === "-" || s[i] === "+") {
            // 현재 문자가 부호 기호인 경우
            if (i !== 0 && s[i - 1] !== "e" && s[i - 1] !== "E") {
                // 부호 기호는 첫 문자이거나 바로 전 문자가 지수 기호가 아닌 경우, 유효하지 않음
                return false;
            }
        } else {
            // 숫자, 소수점, 지수 기호, 부호 기호가 아닌 문자가 포함되면 유효하지 않음
            return false;
        }
    }

    // 숫자가 하나 이상 있어야 하며, 지수 이후에도 숫자가 있어야 함
    return seenNumber && seenNumberAfterE;
};
