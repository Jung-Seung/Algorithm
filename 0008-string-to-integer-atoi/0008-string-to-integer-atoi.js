/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();  // 선행 및 후행 공백 제거

    if (s.length === 0) {
        return 0;  // 빈 문자열 처리
    }

    let num = 0;  // 결과를 저장할 변수 초기화
    let i = 0;    // 문자열 인덱스 초기화
    let sign = 1;  // 부호 저장, 양수면 1, 음수면 -1

    // 부호 확인
    if (s[i] === '+') {
        i++;
    } else if (s[i] === '-') {
        i++;
        sign = -1;
    }

    // 숫자 추출
    while (i < s.length && /^\d$/.test(s[i])) {
        num = num * 10 + parseInt(s[i]);
        i++;
    }

    // 부호 적용
    num *= sign;

    // 정수 오버플로우 체크
    num = Math.max(Math.min(num, Math.pow(2, 31) - 1), -Math.pow(2, 31));

    // 최종 변환된 정수 반환
    return num;
};
