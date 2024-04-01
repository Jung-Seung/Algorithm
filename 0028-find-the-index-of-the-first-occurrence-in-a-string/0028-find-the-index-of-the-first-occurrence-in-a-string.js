/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // 주어진 문자열과 부분 문자열의 길이를 구합니다.
    let n = haystack.length;
    let m = needle.length;
    
    // 만약 부분 문자열의 길이가 0이라면, 항상 첫 번째 위치에 존재하므로 0을 반환합니다.
    if (m === 0) return 0; // empty needle
    
    // 주어진 문자열에서 모든 가능한 시작 위치에 대해 반복합니다.
    for (let i = 0; i <= n - m; i++) {
        // 현재 위치에서 시작하여 부분 문자열과 일치하는지 검사하기 위한 플래그를 초기화합니다.
        let found = true;
        // 부분 문자열의 각 문자를 확인하면서 주어진 문자열과 일치하는지 검사합니다.
        for (let j = 0; j < m; j++) {
            // 현재 위치에서 j만큼 이동한 주어진 문자열의 문자와 부분 문자열의 문자가 다른 경우,
            // 일치하지 않음을 표시하고 내부 반복문을 종료합니다.
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }
        // 내부 반복문을 빠져나왔을 때, found가 여전히 true인 경우는 부분 문자열이 발견된 경우입니다.
        if (found) return i;
    }
    // 주어진 문자열에서 부분 문자열을 찾지 못한 경우, -1을 반환합니다.
    return -1; // needle not found
}