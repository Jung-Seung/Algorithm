/*
문제 설명
두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.

예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.

두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

제한사항
- 각 단어는 알파벳 소문자로만 이루어져 있습니다.
- 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
- words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
- begin과 target은 같지 않습니다.
- 변환할 수 없는 경우에는 0를 return 합니다.
*/

function solution(begin, target, words) {
    var answer = 51;
    // word에 target 단어가 존재할 경우 begin 단어로 탐색 시작
    if(words.includes(target)){
        searchWords(begin, [], 0);
    }
    
    function searchWords(curWord, visited, count){
        // 현재 선택한 단어가 target 단어랑 같을 때 최소 이동 횟수 저장
        if(curWord === target){
            answer = Math.min(answer, count);
            return;
        }
        
        // word의 단어 리스트를 순서대로 깊이 우선 탐색
        for(let i=0; i<words.length; i++){
            // word의 단어 중 현재 단어에서 1개만 다른 경우 선택
            if(visited[i] !== true && checkNextWord(curWord, words[i])){
                visited[i] = true;
                searchWords(words[i], visited, count+1);
                visited[i] = false;
            }
        }
    }
    
    function checkNextWord(cur, next){
        let difWords = 0;
        for(let i=0; i<cur.length; i++){
            if(cur[i] !== next[i]){
                difWords++;
            }
        }
        return difWords === 1 ? true : false;
    }
    return answer === 51 ? 0 : answer;
}

/*
변수 초기화:
answer 변수를 51로 초기화합니다. 이 변수는 최소 이동 횟수를 나타냅니다.

begin 단어와 target 단어 비교:
만약 words 배열에 target 단어가 존재하는 경우에만 탐색을 시작합니다.
words 배열에 target 단어가 없으면 answer는 초기값인 51을 그대로 유지하게 됩니다.

searchWords 함수:
깊이 우선 탐색(Depth-First Search)을 수행하는 재귀 함수입니다.
curWord는 현재 선택한 단어, visited는 방문한 단어를 체크하는 배열, count는 현재까지의 이동 횟수를 나타냅니다.
현재 선택한 단어 curWord가 target 단어와 같을 때, 최소 이동 횟수를 answer에 저장하고 종료합니다.
그렇지 않은 경우, words 배열의 단어를 순회하면서 현재 단어와 1개의 글자만 다른 경우를 선택하여 재귀적으로 탐색합니다. 선택한 단어를 visited 배열에 체크하고, 이동 횟수 count를 1 증가시킨 후 재귀 호출합니다. 재귀 호출이 끝나면 선택한 단어를 다시 방문하지 않기 위해 visited 배열에서 체크를 해제합니다.

checkNextWord 함수:
두 단어 cur와 next를 비교하여 1개의 글자만 다른지 확인하는 함수입니다.
cur와 next의 길이를 비교하고, 각 위치의 글자가 다른지 검사합니다. 다른 글자의 수를 difWords 변수에 저장합니다.
다른 글자의 수가 1인 경우 true를 반환하고, 그 외의 경우에는 false를 반환합니다.

최종 결과 반환:
answer 변수는 초기값인 51인 경우 target 단어를 만들 수 없는 경우를 의미합니다. 이 경우 0을 반환합니다. 그렇지 않으면 answer 값을 반환합니다.
*/