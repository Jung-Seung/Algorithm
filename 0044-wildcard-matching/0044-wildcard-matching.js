/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let string = 0, pattern = 0;
    let starIdx = -1, pointer = -1;
    // 문자열을 끝까지 순회
    while (string < s.length) {
        // 현재 문자가 일치하거나 패턴이 "?"인 경우
        if ((pattern < p.length && s[string] === p[pattern]) || p[pattern] === "?") {
            string++;
            pattern++;
        }
        // 패턴이 "*"인 경우
        else if (pattern < p.length && p[pattern] === "*") {
            // "*"의 위치와 현재 문자열의 인덱스 저장
            starIdx = pattern;
            pointer = string;
            pattern++;
        }
        // 패턴이 "*"이지만 일치하지 않는 경우
        else if (starIdx === -1) {
            return false;
        }
        // "*"을 이용하여 다시 매칭 시도
        else {
            pattern = starIdx + 1;
            string = pointer + 1;
            pointer = string;
        }
    }
    // 남은 패턴이 모두 "*"인지 확인
    for (let idx = pattern; idx < p.length; idx++) {
        if (p[idx] !== "*") {
            return false;
        }
    }
    return true;
};
