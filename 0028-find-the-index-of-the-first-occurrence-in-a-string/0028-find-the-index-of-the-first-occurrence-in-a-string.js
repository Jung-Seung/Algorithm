/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n = haystack.length; // 전체 문자열의 길이
    let m = needle.length;   // 부분 문자열의 길이
    
    if (m === 0) return 0;   // 부분 문자열이 비어있는 경우
    
    for (let i = 0; i <= n - m; i++) {
        let found = true;
        for (let j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }
        if (found) return i; // 부분 문자열 발견 시 시작 인덱스 반환
    }
    return -1; // 부분 문자열을 찾지 못한 경우
};
