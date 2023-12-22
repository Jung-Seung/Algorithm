/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    // 각 문자의 등장 횟수를 저장하는 객체
    const charCount = {};
    // 타겟 문자열 t의 각 문자 등장 횟수를 기록
    for (const char of t) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    // 필요한 문자의 총 개수
    let requiredChars = Object.keys(charCount).length;
    // 윈도우의 시작과 끝 인덱스
    let left = 0;
    let right = 0;
    // 최소 윈도우의 길이와 시작 인덱스
    let minLength = Infinity;
    let minWindowStart = 0;
    // 남은 필요한 문자의 개수
    let missingChars = 0;
    // 문자열을 검사하는 동안의 반복문
    while (right < s.length) {
        const char = s[right];
        // 현재 문자가 필요한 문자에 속하는 경우
        if (charCount[char] !== undefined) {
            charCount[char]--;
            // 필요한 문자를 다 찾은 경우
            if (charCount[char] === 0) {
                missingChars++;
            }
        }
        // 모든 필요한 문자를 찾은 경우
        while (missingChars === requiredChars) {
            // 현재 윈도우의 길이가 최소인지 확인
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minWindowStart = left;
            }
            const leftChar = s[left];
            // 윈도우의 왼쪽을 이동하면서 필요한 문자를 찾음
            if (charCount[leftChar] !== undefined) {
                charCount[leftChar]++;

                // 필요한 문자를 놓친 경우
                if (charCount[leftChar] > 0) {
                    missingChars--;
                }
            }
            left++;
        }
        // 오른쪽으로 계속 확장
        right++;
    }
    // 최소 윈도우를 찾은 경우 반환, 그렇지 않으면 빈 문자열 반환
    return minLength === Infinity ? "" : s.substr(minWindowStart, minLength);
}