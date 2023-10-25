/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // 문자열의 끝부터 시작하여 공백을 제외한 마지막 단어의 길이 계산
    let length = 0;
    let end = s.length - 1;

    // 뒤에서부터 공백을 제외한 마지막 단어의 길이 계산
    while (end >= 0 && s[end] === ' ') {
        end--;
    }
    while (end >= 0 && s[end] !== ' ') {
        length++;
        end--;
    }
    return length;
};