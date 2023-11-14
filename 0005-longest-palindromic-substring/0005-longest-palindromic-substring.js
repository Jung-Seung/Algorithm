/**
 * @param {string} s
 * @return {string}
 */
var check = function(s, i, j) {
    // i가 j보다 작은 동안 계속 반복
    while (i < j) {
        // 문자열의 i번째와 j번째 문자를 비교하여 다르면 false 반환
        if (s[i] !== s[j]) {
            return false;
        }
        // i를 증가, j를 감소하여 다음 문자 비교
        i++;
        j--;
    }
    // 모든 비교에서 다르지 않았으면 true 반환 (팰린드롬)
    return true;
}

var longestPalindrome = function(s) {
    const n = s.length; // 문자열의 길이
    let starting_index = 0; // 팰린드롬 부분 문자열의 시작 인덱스
    let max_len = 0; // 가장 긴 팰린드롬 부분 문자열의 길이
    // 이중 반복문을 통해 모든 부분 문자열에 대해 팰린드롬 여부를 확인
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // check 함수를 사용하여 부분 문자열이 팰린드롬인지 확인
            if (check(s, i, j)) {
                // 현재 부분 문자열이 이전까지 찾은 가장 긴 팰린드롬보다 길면 업데이트
                if (j - i + 1 > max_len) {
                    max_len = j - i + 1;
                    starting_index = i;
                }
            }
        }
    }
    // 가장 긴 팰린드롬 부분 문자열을 추출하여 반환
    return s.substring(starting_index, starting_index + max_len);
}
