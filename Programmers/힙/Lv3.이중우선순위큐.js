/*
문제 설명
이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.

명령어	    수신 탑(높이)
I 숫자      큐에 주어진 숫자를 삽입합니다.
D 1         큐에서 최댓값을 삭제합니다.
D - 1       큐에서 최솟값을 삭제합니다.

이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

제한사항
- operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
- operations의 원소는 큐가 수행할 연산을 나타냅니다.
- 원소는 “명령어 데이터” 형식으로 주어집니다.- 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
- 빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.
*/

function solution(operations) {
    var answer = [];
    // 이중우선순위큐가 될 배열 선언
    const dualPriorityQueue = []
    let isSorted = false;
    
    // 연산 명령어를 순회하며 삽입 명령과 삭제 명령 수행
    for(let i=0;i<operations.length;i++){
        const [operation, number] = operations[i].split(" ");
        // 삽입 명령 시 배열에 값을 추가
        if(operation === "I"){
            dualPriorityQueue.push(parseInt(number));
            isSorted = false;
        // 삭제 명령 시 배열을 정렬하여 최댓값 or 최솟값을 삭제
        } else {
            if(!isSorted){
                dualPriorityQueue.sort((a, b) => a - b);
            }
            if(number === '1'){
                dualPriorityQueue.pop();
            } else {
                dualPriorityQueue.shift();
            }
        }
    }
    if(!isSorted){
        dualPriorityQueue.sort((a, b) => a - b);
    }
    
    // 모든 명령어를 수행한 이중우선수위큐의 결과를 반환
    if(dualPriorityQueue.length > 0){
        answer = [dualPriorityQueue[dualPriorityQueue.length - 1], dualPriorityQueue[0]];
    } else {
        answer = [0, 0];
    }
    
    return answer;
}

/*
이중 우선순위 큐와 정렬 여부 변수 초기화:
빈 배열 dualPriorityQueue를 선언하여 이중 우선순위 큐로 사용합니다.
isSorted 변수는 배열을 정렬했는지 여부를 나타내는 플래그 변수입니다. 초기에는 false로 설정합니다.

연산 명령어 수행:
for...of 구문을 사용하여 operations 배열을 순회합니다.
각 연산 명령어는 "I 숫자" 형식 또는 "D 1" 또는 "D -1" 형식으로 주어집니다.
- "I 숫자" 명령어인 경우:
    number를 정수로 변환하여 dualPriorityQueue 배열에 삽입합니다.
    isSorted를 false로 설정하여 배열이 정렬되지 않았음을 표시합니다.
- "D 1" 또는 "D -1" 명령어인 경우:
    isSorted가 false인 경우, dualPriorityQueue 배열을 오름차순으로 정렬합니다.
    "D 1"인 경우, 배열에서 최댓값을 제거합니다. "D -1"인 경우, 배열에서 최솟값을 제거합니다.

배열 정렬:
모든 연산 명령어를 처리한 후에도 isSorted가 false인 경우, 배열을 오름차순으로 정렬합니다.

이중 우선순위 큐 결과 반환:
dualPriorityQueue 배열의 길이가 0보다 크면, 최댓값과 최솟값을 찾아 answer 배열에 할당합니다.
dualPriorityQueue 배열의 길이가 0인 경우, [0, 0] 배열을 answer에 할당합니다.
answer를 반환합니다.
*/

/*
먼저, 이중 우선순위 큐가 될 배열 dualPriorityQueue을 선언합니다. 이 배열에는 삽입 명령어에 따라 값을 추가하고 삭제 명령어에 따라 최댓값 또는 최솟값을 삭제합니다. 
isSorted 변수는 배열이 정렬되었는지를 나타내는 플래그 변수로, 배열이 정렬되지 않은 상태에서 삭제 명령어가 들어오면 정렬을 수행합니다.

그런 다음, 주어진 연산 명령어를 순회합니다. 각 연산 명령어는 "I 숫자" 또는 "D 숫자" 형태로 주어집니다. 여기서 "I"는 삽입 명령어, "D"는 삭제 명령어를 나타내고, 숫자는 해당 연산에 사용되는 값을 나타냅니다.

삽입 명령어 "I"일 때: 배열에 값을 추가하고 isSorted를 false로 설정합니다.
삭제 명령어 "D"일 때: 배열이 정렬되지 않았다면 정렬을 수행합니다. 그리고 "D 1"이면 배열의 마지막 값을 삭제하고, "D -1"이면 배열의 첫 번째 값을 삭제합니다.

모든 연산 명령어를 처리한 후, 만약 배열이 정렬되지 않았다면 정렬을 수행합니다. 그리고 배열의 길이를 확인하여 결과를 반환합니다.

dualPriorityQueue의 길이가 0보다 크다면, 배열의 최댓값과 최솟값을 결과로 반환합니다.
dualPriorityQueue의 길이가 0이라면, [0, 0]을 결과로 반환합니다.
*/