/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 만약 문자열 배열이 비어있다면 빈 문자열 반환
    if (strs.length === 0) {
        return '';
    }

    // 첫 번째 문자열을 초기값으로 설정
    let ans = strs[0];

    // 배열의 나머지 문자열과 첫 번째 문자열을 비교하면서 공통 접두사 찾기
    for (let i = 1; i < strs.length; i++) {
        // 현재 문자열이 ans로 시작하지 않을 때까지 ans를 줄여나감
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
            // ans가 빈 문자열이 되면 더 이상 공통 접두사가 없으므로 빈 문자열 반환
            if (ans === '') {
                return '';
            }
        }
    }

    // 모든 문자열에 대한 비교가 끝났을 때 ans에는 가장 긴 공통 접두사가 저장됨
    return ans;
};
