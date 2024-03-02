/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // 주어진 행 수가 1인 경우, 원래 문자열 그대로 반환
    if (numRows === 1) {
        return s;
    } 
    // 결과 문자열을 저장할 변수
    let result = '';
    // 주어진 문자열의 길이
    const n = s.length;
    // 주기 길이
    const cycleLen = 2 * numRows - 2;
    // 각 행마다 문자를 추가하며 변환
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < n; j += cycleLen) {
            // 직선 부분에 대해 문자 추가
            result += s[j + i];
            // 대각선 부분에 대해 문자 추가
            if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
                result += s[j + cycleLen - i];
            }
        }
    }
    // 결과 문자열 반환
    return result;
};