/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // 각 로마 숫자에 대한 값
    const value = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;

    // 로마 숫자를 순회하면서 변환
    for (let i = 0; i < s.length; i++) {
        let current = value[s[i]]; // 현재 문자에 대한 값
        let next = value[s[i + 1]]; // 다음 문자에 대한 값

        // 다음 문자의 값이 현재 문자의 값보다 크다면 (예: IV, IX, XL 등)
        if (current < next) {
            result += next - current; // 다음 문자의 값에서 현재 문자의 값을 뺀 값을 결과에 더함
            i++; // 다음 문자는 이미 처리했으므로 인덱스를 한 칸 더 이동
        } else {
            result += current; // 그 외의 경우 현재 문자의 값을 결과에 더함
        }
    }

    return result; // 변환된 정수 반환
};