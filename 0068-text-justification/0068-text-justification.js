/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    // 결과를 저장할 배열
    let res = [];
    // 현재 줄에 들어갈 단어들을 저장할 배열
    let curWords = [];
    // 현재 줄의 길이
    let curLen = 0;

    // 주어진 단어 배열을 순회합니다.
    for (let word of words) {
        // 현재 단어를 추가하면 최대 너비를 초과하는 경우
        if (curLen + word.length + curWords.length > maxWidth) {
            // 현재 줄에 남은 공백의 총 개수
            let totalSpaces = maxWidth - curLen;
            // 현재 줄에 있는 단어 사이의 공백을 채울 구간 개수
            let gaps = curWords.length - 1;

            // 공백을 채울 구간이 없는 경우
            if (gaps === 0) {
                // 단어와 남은 공백을 붙여서 결과 배열에 추가
                res.push(curWords[0] + ' '.repeat(totalSpaces));
            } else {
                // 각 구간에 배분될 공백의 최소 개수
                let spacePerGap = Math.floor(totalSpaces / gaps);
                // 공백이 추가로 필요한 구간의 개수
                let extraSpaces = totalSpaces % gaps;
                // 결과로 추가할 현재 줄의 문자열
                let line = '';

                // 현재 줄에 있는 단어들을 순회하면서 문자열을 구성
                for (let i = 0; i < curWords.length; i++) {
                    line += curWords[i];
                    // 구간 사이에 공백을 추가
                    if (i < gaps) {
                        line += ' '.repeat(spacePerGap);
                        // 추가로 공백이 필요한 경우 추가 공백을 추가
                        if (i < extraSpaces) {
                            line += ' ';
                        }
                    }
                }

                // 현재 줄의 문자열을 결과 배열에 추가
                res.push(line);
            }

            // 현재 줄을 초기화
            curWords = [];
            curLen = 0;
        }

        // 현재 단어를 현재 줄에 추가하고 길이를 업데이트
        curWords.push(word);
        curLen += word.length;
    }

    // 마지막 줄을 처리
    let lastLine = curWords.join(' ');
    // 남은 공백을 추가하여 최대 너비에 맞춰줌
    while (lastLine.length < maxWidth) {
        lastLine += ' ';
    }
    // 결과 배열에 마지막 줄 추가
    res.push(lastLine);

    // 최종 결과 반환
    return res;
};
