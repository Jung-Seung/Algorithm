/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = []; // 결과를 저장할 배열
    let line = []; // 현재 처리중인 줄의 단어들을 저장할 배열
    let lineLength = 0; // 현재 처리중인 줄의 길이

    for (let i = 0; i < words.length; i++) { // 단어 배열을 반복
        if (lineLength + line.length + words[i].length > maxWidth) { // 만약 현재 줄에 단어를 추가했을 때 maxWidth를 초과한다면
            const numSpaces = maxWidth - lineLength; // 공백의 개수를 계산
            const numGaps = line.length - 1 || 1; // 공백을 삽입할 간격의 개수를 계산

            let lineStr = line[0]; // 결과로 저장할 현재 줄의 문자열 초기화

            if (line.length === 1) { // 현재 줄에 단어가 하나만 있다면
                lineStr += ' '.repeat(numSpaces); // 공백을 삽입
            } else { // 현재 줄에 단어가 여러 개 있다면
                const spaces = ' '.repeat(Math.floor(numSpaces / numGaps)); // 간격마다 삽입할 공백 문자열을 생성
                const extraSpaces = numSpaces % numGaps; // 추가로 삽입할 공백의 개수를 계산
                for (let j = 1; j < line.length; j++) { // 현재 줄의 단어들을 순회하면서
                    if (j <= extraSpaces) { // 추가로 삽입할 공백이 남아있다면
                        lineStr += spaces + ' ' + line[j]; // 해당 위치에 공백을 삽입하여 단어를 연결
                    } else {
                        lineStr += spaces + line[j]; // 아니면 공백 없이 단어를 연결
                    }
                }
            }

            result.push(lineStr); // 완성된 현재 줄을 결과 배열에 삽입
            line = []; // 현재 줄을 초기화
            lineLength = 0; // 현재 줄의 길이를 초기화
        }

        line.push(words[i]); // 현재 단어를 현재 줄에 삽입
        lineLength += words[i].length; // 현재 단어의 길이를 현재 줄의 길이에 추가
    }

    result.push(line.join(' ').padEnd(maxWidth, ' ')); // 마지막 줄에 대한 처리를 마무리하고 결과 배열에 삽입
    return result; // 결과 배열 반환
};
