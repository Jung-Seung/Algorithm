/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;           // 가장 긴 부분 문자열의 길이
    let left = 0;                // 현재 부분 문자열의 시작 인덱스
    const chars = new Set();     // 현재 부분 문자열에 등장한 문자를 저장하는 집합
    
    // 문자열을 순회하면서 중복 없는 부분 문자열을 찾음
    for (let i = 0; i < s.length; i++) {
        // 만약 현재 문자가 이미 등장한 문자라면
        while (chars.has(s[i])) {
            // 현재 부분 문자열의 시작 지점을 한 칸 오른쪽으로 이동하고 해당 문자를 집합에서 삭제
            chars.delete(s[left]);
            left++;
        }
        
        // 현재 문자를 집합에 추가하고 최대 길이 갱신
        chars.add(s[i]);
        maxLength = Math.max(maxLength, chars.size);
    }

    // 중복 없이 가장 긴 부분 문자열의 길이 반환
    return maxLength;
};