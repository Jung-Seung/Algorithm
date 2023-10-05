/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
    const result = [];
    const wordLen = words[0].length; // 단어의 길이
    const totalLen = wordLen * words.length; // 모든 단어의 길이 합

    // words 배열의 단어들을 카운트
    const wordCount = {};
    for (const word of words) {
        if (word in wordCount) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    // s 문자열을 순회하며 가능한 모든 부분 문자열을 검사
    for (let i = 0; i <= s.length - totalLen; i++) {
        const substr = s.substr(i, totalLen); // 현재 부분 문자열

        // 현재 부분 문자열을 단어 길이만큼 잘라서 카운트
        const substrCount = {};
        for (let j = 0; j < totalLen; j += wordLen) {
            const word = substr.substr(j, wordLen);
            if (word in substrCount) {
                substrCount[word]++;
            } else {
                substrCount[word] = 1;
            }
        }

        // 현재 부분 문자열과 words의 순열을 비교
        let isPermutation = true;
        for (const word of words) {
            if (!(word in substrCount) || substrCount[word] !== wordCount[word]) {
                isPermutation = false;
                break;
            }
        }

        // 현재 부분 문자열이 words의 순열이면 결과에 추가
        if (isPermutation) {
            result.push(i);
        }
    }

    return result;
}