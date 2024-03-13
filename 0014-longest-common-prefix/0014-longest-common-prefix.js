/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 만약 문자열 배열이 비어있다면 빈 문자열 반환
    if (strs.length === 0) {
        return '';
    }
    // 첫 번째 문자열을 기준으로 초기화
    let ans = strs[0];
    
    // 두 번째 문자열부터 순회하며 공통 접두사 찾기
    for (let i = 1; i < strs.length; i++) {
        // 현재 문자열이 기준 문자열로 시작하지 않을 때까지 반복하여 접두사 찾기
        while (strs[i].indexOf(ans) !== 0) {
            // 기준 문자열을 하나씩 줄여가며 다시 비교
            ans = ans.substring(0, ans.length - 1);
            // 만약 기준 문자열이 빈 문자열이 되면 공통 접두사 없음을 반환
            if (ans === '') {
                return '';
            }
        }
    }
    // 모든 문자열을 검사한 후 공통 접두사 반환
    return ans;
};