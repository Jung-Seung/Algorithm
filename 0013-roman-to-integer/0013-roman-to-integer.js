/**
 * @param {string} s
 * @return {number}
 */
// 로마 숫자를 정수로 변환하는 함수
var romanToInt = function(s) {
    // 결과를 저장할 변수 초기화
    let result = 0;
    // 로마 숫자에 대응하는 값을 저장한 객체 정의
    const value = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000 
    }
    // 문자열을 순회하며 로마 숫자를 정수로 변환
    for(let i = 0; i < s.length; i++) {
        // 현재 문자에 대응하는 값과 다음 문자에 대응하는 값을 가져옴
        let current = value[s[i]];
        let next = value[s[i+1]];
        // 현재 값이 다음 값보다 작으면 (현재 값이 작은 자리에 있으면)
        if(current < next) {
            // 결과에는 다음 값에서 현재 값을 뺀 값을 더하고, 인덱스를 한 칸 앞으로 이동
            result += next - current;
            i++;
        } else {
            // 그렇지 않으면 현재 값을 더함
            result += current;
        }
    }
    // 최종 결과 반환
    return result;
};
