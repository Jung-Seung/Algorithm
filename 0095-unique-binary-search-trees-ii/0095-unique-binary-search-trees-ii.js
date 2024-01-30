/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// 주어진 정수 n에 대한 구조적으로 고유한 BST(이진 탐색 트리)의 모든 경우를 반환하는 함수
var generateTrees = function(n) {
    // 구조적으로 고유한 BST의 모든 경우를 백트래킹하여 생성하는 함수
    const generateBacktracking = (fst, lst) => {
        // 현재 서브트리의 값 범위가 유효하지 않을 경우 빈 배열 반환
        if (fst > lst)
            return [undefined]; // undefined는 빈 서브트리를 나타냄
        let tree = [];
        // 현재 서브트리에서 가능한 모든 BST의 루트 노드 생성
        for (let val = fst; val <= lst; val++) {
            // 현재 값을 루트로 하는 노드 생성
            for (let left of generateBacktracking(fst, val - 1)) {
                for (let right of generateBacktracking(val + 1, lst)) {
                    let node = new TreeNode(val, left, right);
                    tree.push(node);
                }
            }
        }
        return tree;
    };

    // 주어진 n에 대한 BST 생성 시작
    return generateBacktracking(1, n);
};