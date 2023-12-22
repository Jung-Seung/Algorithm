/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 만약 t의 길이가 s의 길이보다 크다면 빈 문자열 반환
    if (t.length > s.length) return '';
    // 필요한 문자의 개수를 저장하는 객체
    const neededChars = {};
    // t 문자열의 각 문자의 등장 횟수를 기록
    for (let char of t) {
        neededChars[char] = (neededChars[char] || 0) + 1;
    }
    // 윈도우의 왼쪽, 오른쪽 포인터 및 필요한 문자의 종류 수 초기화
    let left = 0;
    let right = 0;
    let neededLength = Object.keys(neededChars).length;
    // 결과로 반환할 최소 윈도우의 부분 문자열
    let substring = '';
    // 오른쪽 포인터를 이동하면서 탐색
    while (right < s.length) {
        const rightChar = s[right];
        // 현재 문자의 필요한 개수를 감소하고, 필요한 문자 종류 수 업데이트
        neededChars[rightChar]--;
        if (neededChars[rightChar] === 0) neededLength--;
        // 모든 필요한 문자를 찾은 경우
        while (neededLength === 0) {
            // 현재까지의 부분 문자열이 더 작거나 처음인 경우 갱신
            if (!substring || substring.length > right - left + 1) {
                substring = s.slice(left, right + 1);
            }
            const leftChar = s[left];
            // leftChar가 필요한 개수가 0이 되면, 다시 필요한 문자로 카운트
            if (neededChars[leftChar] === 0) {
                neededLength++;
            }
            // leftChar의 필요한 개수를 증가시키고, 왼쪽 포인터 이동
            neededChars[leftChar]++;
            left++;
        }
        // 오른쪽 포인터 이동
        right++;
    }
    // 최소 윈도우 부분 문자열 반환
    return substring;
};