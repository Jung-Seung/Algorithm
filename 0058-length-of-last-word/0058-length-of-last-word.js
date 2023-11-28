/**
 * @param {string} s
 * @return {number}
 */

// 주어진 문자열에서 마지막 단어의 길이를 반환하는 함수
var lengthOfLastWord = function(s) {
    // 주어진 문자열 양 끝의 공백을 제거한 문자열을 얻음
    let trimmedString = s.trim();
    // 마지막 단어의 길이를 계산하여 반환
    return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
};
