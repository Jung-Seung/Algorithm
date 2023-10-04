/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") return 0; // needle이 빈 문자열인 경우 항상 0을 반환

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i; // 첫 번째 발생 위치를 찾으면 해당 위치를 반환
        }
    }

    return -1; // 발생 위치를 찾지 못한 경우 -1을 반환
};