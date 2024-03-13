/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 만약 문자열 배열이 비어있다면 빈 문자열 반환
    if (!strs.length) return '';
    
    // 첫 번째 문자열을 기준으로 각 문자열의 같은 위치의 문자를 비교하여 공통 접두사를 찾음
    for (let i = 0; i < strs[0].length; i++) {
        // 첫 번째 문자열의 i번째 문자를 기준으로 나머지 문자열들의 i번째 문자를 비교
        for (let s of strs) {
            // 만약 현재 문자열의 i번째 문자가 첫 번째 문자열의 i번째 문자와 다르다면,
            // 해당 위치까지의 문자열을 반환하여 공통 접두사를 구함
            if (s[i] !== strs[0][i]) {
                return s.slice(0, i);
            }
        }
    }   
    // 모든 문자열이 같은 경우 첫 번째 문자열 자체가 공통 접두사가 되므로 첫 번째 문자열 반환
    return strs[0];
};