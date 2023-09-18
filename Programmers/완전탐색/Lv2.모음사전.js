/*
문제 설명
사전에 알파벳 모음 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는, 길이 5 이하의 모든 단어가 수록되어 있습니다. 사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA"이며, 마지막 단어는 "UUUUU"입니다.

단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return 하도록 solution 함수를 완성해주세요.

제한사항
- word의 길이는 1 이상 5 이하입니다.
- word는 알파벳 대문자 'A', 'E', 'I', 'O', 'U'로만 이루어져 있습니다.

입출력 예
word	    result
"AAAAE"	    6
"AAAE"	    10
"I"	        1563
"EIO"	    1189

입출력 예 설명
입출력 예 #1
사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA", "AAA", "AAAA", "AAAAA", "AAAAE", ... 와 같습니다. "AAAAE"는 사전에서 6번째 단어입니다.

입출력 예 #2
"AAAE"는 "A", "AA", "AAA", "AAAA", "AAAAA", "AAAAE", "AAAAI", "AAAAO", "AAAAU"의 다음인 10번째 단어입니다.

입출력 예 #3
"I"는 1563번째 단어입니다.

입출력 예 #4
"EIO"는 1189번째 단어입니다.
*/

function solution(word) {
    var answer = 0;
    // 모음 리스트 만든다
    const wordList = ['A', 'E', 'I', 'O', 'U'];
    nextWord([]);
    // 사전 순서에 맞게 다음 단어를 만든다
    function nextWord(curWord, length = 0){
        // 만들어진 단어가 입력된 단어(word)와 같을 때, 몇번째 단어인지 반환
        if(word.length === length && curWord.every((value, idx) => value === word[idx])){
            return true;
        } else if(length >= 5) {
            return false;
        }
        for(let i=0;i<wordList.length;i++){
            curWord.push(wordList[i]);
            answer++;
            if(nextWord(curWord, curWord.length)){
                return true;
            }
            curWord.pop();
        }
        return false;
    }
    
    return answer;
}

/*
위 코드는 주어진 단어 word를 만들기 위해 사용할 수 있는 모음 문자들('A', 'E', 'I', 'O', 'U')을 조합하여 모든 경우의 수를 계산하는 함수 solution입니다.

함수는 사전 순서에 맞게 다음 단어를 만드는 nextWord 함수를 정의하고, 이를 통해 모든 경우의 수를 찾습니다. nextWord 함수는 현재까지 만들어진 단어 curWord와 현재까지의 단어 길이 length를 매개변수로 받습니다.
    
    curWord는 임시로 생성된 단어를 저장하는 배열입니다.
    length는 현재까지 만들어진 단어의 길이를 나타냅니다.

함수는 재귀적으로 모음을 추가하여 모든 단어 조합을 생성하고, 주어진 word와 비교하여 일치하는 경우 answer 값을 증가시킵니다. 이렇게 생성된 모든 단어의 경우의 수를 answer로 반환합니다.
*/

function solution(word) {
    const wordList = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    let queue = [''];
    
    while (queue.length > 0) {
        const curWord = queue.shift();
        answer++;
        if (curWord === word) {
            break;
        }
        if (curWord.length < 5) {
            for (let i = 0; i < wordList.length; i++) {
                queue.push(curWord + wordList[i]);
            }
        }
    }
    return answer;
}

/*
위 코드는 사전 순서에 맞게 다음 단어를 만들기 위해 queue라는 배열을 사용합니다. 먼저 빈 문자열('')로 초기화된 queue 배열을 생성하고, while 루프를 통해 다음 단어를 만들어 queue에 추가하고 순차적으로 검사합니다.
    
    curWord: 현재까지 만들어진 단어를 나타냅니다.
    queue: 현재까지 만들어진 단어들이 저장된 배열입니다.

각 루프에서는 queue 배열의 첫 번째 요소를 꺼내서(shift) 현재 단어 curWord로 설정합니다. 그리고 만약 curWord가 주어진 word와 일치하면, 즉 모든 단어를 만들어 냈으면 while 루프를 종료합니다.

일치하지 않는 경우(curWord가 word와 일치하지 않는 경우)에는 현재 단어 길이가 5 미만일 때 모음을 하나씩 추가하여(wordList[i]) 다음 단어를 만들어 queue에 추가합니다. 이렇게 반복하여 모든 경우를 순차적으로 확인하게 됩니다.
*/