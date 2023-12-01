/*
문제 설명
n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다. 당신은 이 전선들 중 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하려고 합니다. 이때, 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 합니다.
송전탑의 개수 n, 그리고 전선 정보 wires가 매개변수로 주어집니다. 전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때, 두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 return 하도록 solution 함수를 완성해주세요.

제한사항
- n은 2 이상 100 이하인 자연수입니다.
- wires는 길이가 n-1인 정수형 2차원 배열입니다.
    - wires의 각 원소는 [v1, v2] 2개의 자연수로 이루어져 있으며, 이는 전력망의 v1번 송전탑과 v2번 송전탑이 전선으로 연결되어 있다는 것을 의미합니다.
    - 1 ≤ v1 < v2 ≤ n 입니다.
    - 전력망 네트워크가 하나의 트리 형태가 아닌 경우는 입력으로 주어지지 않습니다.

입출력 예
n	wires	                                            result
9	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]	3
4	[[1,2],[2,3],[3,4]]	                                0
7	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]	            1
*/

// 전력망을 나타내는 그래프에서 하나의 전선을 끊어 두 개의 서브 트리로 나누었을 때,
// 두 서브 트리의 노드 개수 차이의 최솟값을 구하는 함수.
function solution(n, wires) {
    // 결과값 초기화
    var answer = Number.MAX_SAFE_INTEGER;
    
    // 트리 구조를 저장할 배열
    let tree = Array.from(Array(n + 1), () => []);

    // 주어진 간선 정보를 기반으로 트리를 생성
    wires.map((element) => {
        let [a, b] = element;
        tree[a].push(b);
        tree[b].push(a);
    });

    // 주어진 루트 노드를 기준으로 서브 트리의 노드 개수를 반환하는 함수
    function searchTree(root, exceptNum) {
        let count = 0;
        let visit = [];
        let queue = [root];
        visit[root] = true;

        // BFS를 통해 서브 트리의 노드 개수 계산
        while (queue.length) {
            let index = queue.pop();
            tree[index].forEach((element) => {
                if (element !== exceptNum && visit[element] !== true) {
                    visit[element] = true;
                    queue.push(element);
                }
            });
            count++;
        }

        return count;
    }

    // 모든 간선에 대해 함수를 적용하여 최솟값을 찾음
    wires.forEach((element) => {
        let [a, b] = element;
        answer = Math.min(answer, Math.abs(searchTree(a, b) - searchTree(b, a)));
    });

    // 최종 결과 반환
    return answer;
}

/*
우선 wires에 따른 트리를 만들어준다.
1. 함수 만들기 (제외 숫자는 제외하고 탐색하는 함수)
-> BFS활용
-> 인자로 받는 것은 root노드와 예외 노드
root노드부터 시작해서 예외 노드 제외하고는 모두 탐색에서 count값을 리턴
2. 이를 wires에 값에서 첫번째와 두번째 값을 번갈아가면서 넣으면서 이에 리턴 값에 절댓값을 구함.
3. answer과 비교해서 작다면 초기화
*/

/*
먼저, tree 배열을 이용하여 트리를 만듭니다. tree는 인접 리스트 형태로 구현되며, tree[i]는 노드 i와 연결된 노드들의 집합을 나타냅니다. 각 wires 배열의 요소를 순회하면서 노드 a와 b를 연결해줍니다.

searchTree 함수는 주어진 root 노드를 시작으로 하여 
exceptNum 노드를 제외한 서브트리의 크기를 탐색하는 함수입니다. 
visit 배열을 이용하여 방문한 노드를 체크하고, BFS(Breadth-First Search) 알고리즘을 통해 서브트리의 크기를 계산합니다.

그 다음, wires 배열을 순회하면서 각 간선을 끊어 두 개의 서브트리로 분할한 후, 각 서브트리의 크기 차이를 구합니다. 
searchTree 함수를 이용하여 각 서브트리의 크기를 계산한 후, 두 서브트리 크기의 차이의 절댓값을 최소값으로 업데이트합니다.

이렇게 주어진 n과 wires 정보로 만들어진 트리를 분할하여 서브트리 크기의 차이를 구하고, 최소값을 반환하는 함수입니다.
*/
