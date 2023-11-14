/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // 행이 1인 경우에는 변환할 필요가 없으므로 주어진 문자열 그대로 반환
    if (numRows === 1) {
        return s;
    }

    // 결과 문자열을 저장할 변수 초기화
    let result = '';
    // 입력 문자열의 길이
    const n = s.length;
    // 주기의 길이 (한 번의 Z 패턴 주기의 길이)
    const cycleLen = 2 * numRows - 2;

    // 행을 기준으로 Z 패턴을 구성
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < n; j += cycleLen) {
            // 현재 행에 속하는 문자를 결과에 추가
            result += s[j + i];
            // 첫 번째 행과 마지막 행이 아니며, 대각선에 해당하는 문자를 추가
            if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
                result += s[j + cycleLen - i];
            }
        }
    }

    // 최종적으로 변환된 결과 문자열 반환
    return result;
};
