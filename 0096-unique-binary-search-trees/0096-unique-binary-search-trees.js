/**
 * @param {number} n
 * @return {number}
 */
// 주어진 정수 n에 대한 구조적으로 고유한 BST(이진 탐색 트리)의 개수를 반환하는 함수
var numTrees = function(n) {
    // 메모이제이션을 위한 배열 초기화
    const memo = new Array(n + 1).fill(-1);
    // 주어진 노드 수에 대한 BST 개수를 재귀적으로 계산하는 함수
    const countBST = (nodes) => {
        // 기저 사례: 노드 수가 0 또는 1일 때 경우의 수는 1
        if (nodes <= 1) {
            return 1;
        }
        // 이미 계산한 경우 메모값 반환
        if (memo[nodes] !== -1) {
            return memo[nodes];
        }
        let totalCount = 0;
        // 루트 노드를 1부터 n까지 시도하며 가능한 모든 BST의 경우를 합산
        for (let root = 1; root <= nodes; root++) {
            const leftSubtrees = countBST(root - 1); // 왼쪽 서브트리의 경우의 수
            const rightSubtrees = countBST(nodes - root); // 오른쪽 서브트리의 경우의 수

            // 현재 루트를 기준으로 가능한 BST의 경우의 수는 왼쪽 서브트리 * 오른쪽 서브트리
            totalCount += leftSubtrees * rightSubtrees;
        }
        // 메모이제이션
        memo[nodes] = totalCount;
        return totalCount;
    };
    // 주어진 노드 수에 대한 BST 개수 계산 시작
    return countBST(n);
};