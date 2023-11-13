/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();    // 현재 부분 문자열에 포함된 문자들을 저장하는 Set
    let left = 0;           // 현재 부분 문자열의 시작 인덱스를 나타내는 포인터
    let maxSize = 0;        // 가장 긴 부분 문자열의 길이를 저장하는 변수
    // 예외 처리: 빈 문자열일 경우 0을 반환
    if (s.length === 0) return 0;
    // 예외 처리: 문자열의 길이가 1일 경우 1을 반환
    if (s.length === 1) return 1;
    // 문자열을 순회합니다.
    for (let i = 0; i < s.length; i++) {
        // Set에 현재 문자가 존재할 때까지 왼쪽 포인터를 이동시키면서 중복 제거
        while (set.has(s[i])) {
            set.delete(s[left]);
            left++;
        }
        // 현재 문자를 Set에 추가하고, 가장 긴 부분 문자열의 길이 갱신
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1);
    }
    // 최종적으로 얻은 가장 긴 부분 문자열의 길이를 반환
    return maxSize;
};
