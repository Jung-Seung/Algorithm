/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();  // 앞뒤 공백 제거
    if (s.length === 0) {
        return 0;  // 빈 문자열 처리
    }
    let num = 0;  // 변환된 숫자 저장
    let i = 0;  // 문자열 인덱스
    let sign = 1;  // 양수면 1, 음수면 -1
    // 부호 처리
    if (s[i] === '+') {
        i++;  // 양수 부호일 경우 다음 문자 확인
    } else if (s[i] === '-') {
        i++;  // 음수 부호일 경우 다음 문자 확인
        sign = -1;  // 음수 부호 설정
    }
    // 숫자 변환
    while (i < s.length && /^\d$/.test(s[i])) {
        num = num * 10 + parseInt(s[i]);  // 현재 문자를 숫자로 변환하여 추가
        i++;  // 다음 문자 확인
    }
    num *= sign;  // 부호 적용
    // 32비트 정수 범위 검사하여 최댓값 또는 최솟값 반환
    num = Math.max(Math.min(num, Math.pow(2, 31) - 1), -Math.pow(2, 31));
    return num;  // 변환된 정수 반환
}